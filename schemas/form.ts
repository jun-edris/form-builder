import * as z from "zod";

export type FormSchemaType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});
