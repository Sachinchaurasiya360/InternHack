import { z } from "zod";

export const submitTestSchema = z.object({
  answers: z
    .array(
      z.object({
        questionId: z.number().int(),
        selectedIndex: z.number().int().min(0).max(3),
      })
    )
    .min(1),
  proctorLog: z
    .object({
      tabSwitches: z.number().int().min(0).default(0),
      focusLosses: z.number().int().min(0).default(0),
      fullscreenExits: z.number().int().min(0).default(0),
      devtoolsAttempts: z.number().int().min(0).default(0),
      copyPasteAttempts: z.number().int().min(0).default(0),
      rightClickAttempts: z.number().int().min(0).default(0),
      faceViolations: z.array(z.object({
        type: z.enum(["NO_FACE", "MULTIPLE_FACES"]),
        timestamp: z.string(),
        duration: z.number().min(0).optional(),
      })).default([]),
      warnings: z.array(z.any()).default([]),
      terminated: z.boolean().default(false),
      terminationReason: z.string().nullable().default(null),
      cameraEnabled: z.boolean().default(false),
      snapshotCount: z.number().int().min(0).default(0),
    })
    .optional(),
});

export const createTestSchema = z.object({
  skillName: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("INTERMEDIATE"),
  timeLimitSecs: z.number().int().positive().default(1800),
  passThreshold: z.number().int().min(1).max(100).default(70),
});

export const createQuestionSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string().min(1)).length(4),
  correctIndex: z.number().int().min(0).max(3),
  explanation: z.string().optional(),
});

export const addQuestionsSchema = z.object({
  questions: z.array(createQuestionSchema).min(1),
});

/* ---- Incremental proctor-log flush (issue #2400) ---- */

const proctorEventTypeEnum = z.enum([
  "tab_switch",
  "focus_loss",
  "fullscreen_exit",
  "devtools",
  "copy_paste",
  "right_click",
  "face_violation",
  "camera_track_ended",
  "camera_track_muted",
]);

export const proctorLogBatchSchema = z.object({
  events: z
    .array(
      z.object({
        type: proctorEventTypeEnum,
        timestamp: z
          .string()
          .refine(
            (t) => {
              const ms = new Date(t).getTime();
              return !isNaN(ms) && ms > 0 && ms <= Date.now() + 60_000;
            },
            "Timestamp must be a valid ISO date string and not far in the future",
          ),
        detail: z.string().max(200).optional(),
      }),
    )
    .min(1)
    .max(200),
});
