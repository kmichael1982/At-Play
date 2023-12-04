import { z } from 'zod'

export const sendMessageEmailSchema = z.object({
    name: z.string().min(2, "error.name"),
    email: z.string().email("error.email"),
    subject: z
        .string()
        .refine(val => ["Account", "Service", "Pricing", "Support"].includes(val))
        .optional(),
    message: z.string(),
})
