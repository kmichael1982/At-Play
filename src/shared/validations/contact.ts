import { z } from 'zod'


export const sendMessageEmailSchema = z.object({
    name: z.string().min(2, 'error.name'),
    email: z.string().email('error.email'),
    message: z.string(),
})
