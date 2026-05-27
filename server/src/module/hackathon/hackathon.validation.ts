import { z } from "zod";

export const participateHackathonSchema = z.object({
  status: z.enum(["INTERESTED", "PARTICIPATING"]),
});
