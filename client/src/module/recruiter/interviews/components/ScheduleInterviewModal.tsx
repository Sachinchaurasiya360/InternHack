import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import { useScheduleInterview, useUpdateInterview } from "../../../interview-schedule/queries";
import { Button } from "../../../../components/ui/button"; // Wait, button is in src/components/ui/button.tsx
import toast from "react-hot-toast";

const schema = z.object({
  studentId: z.number().min(1, "Student is required"),
  scheduledAt: z.string().min(1, "Date and time are required"),
  durationMinutes: z.number().min(15, "Minimum 15 mins"),
  meetingLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    id: number;
    studentId: number;
    scheduledAt: string;
    durationMinutes: number;
    meetingLink?: string;
    notes?: string;
  };
}

export function ScheduleInterviewModal({ isOpen, onClose, initialData }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialData ? {
      studentId: initialData.studentId,
      scheduledAt: new Date(initialData.scheduledAt).toISOString().slice(0, 16),
      durationMinutes: initialData.durationMinutes,
      meetingLink: initialData.meetingLink || "",
      notes: initialData.notes || "",
    } : {
      durationMinutes: 60,
    }
  });

  const { mutateAsync: scheduleInterview, isPending: isScheduling } = useScheduleInterview();
  const { mutateAsync: updateInterview, isPending: isUpdating } = useUpdateInterview();

  const isPending = isScheduling || isUpdating;

  const onSubmit = async (data: FormValues) => {
    try {
      if (initialData) {
        await updateInterview({ id: initialData.id, data: { ...data, scheduledAt: new Date(data.scheduledAt).toISOString(), meetingLink: data.meetingLink || undefined, notes: data.notes || undefined } });
        toast.success("Interview updated successfully!");
      } else {
        await scheduleInterview({ ...data, scheduledAt: new Date(data.scheduledAt).toISOString(), meetingLink: data.meetingLink || undefined, notes: data.notes || undefined });
        toast.success("Interview scheduled and invite sent!");
      }
      reset();
      onClose();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-xl p-6 shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
          {initialData ? "Edit Interview" : "Schedule Interview"}
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {!initialData && (
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Student ID</label>
              <input
                type="number"
                {...register("studentId", { valueAsNumber: true })}
                className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Student ID"
              />
              {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId.message}</p>}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Date & Time</label>
            <input
              type="datetime-local"
              {...register("scheduledAt")}
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.scheduledAt && <p className="text-red-500 text-xs mt-1">{errors.scheduledAt.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Duration (minutes)</label>
            <input
              type="number"
              {...register("durationMinutes", { valueAsNumber: true })}
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.durationMinutes && <p className="text-red-500 text-xs mt-1">{errors.durationMinutes.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Meeting Link (Optional)</label>
            <input
              type="url"
              {...register("meetingLink")}
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="https://zoom.us/..."
            />
            {errors.meetingLink && <p className="text-red-500 text-xs mt-1">{errors.meetingLink.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Notes (Optional)</label>
            <textarea
              {...register("notes")}
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            {errors.notes && <p className="text-red-500 text-xs mt-1">{errors.notes.message}</p>}
          </div>

          <div className="flex justify-end pt-4">
            <Button variant="ghost" onClick={onClose} type="button" className="mr-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
