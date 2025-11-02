import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255).trim(),
  email: z.email().max(255).toLowerCase().trim(),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(255),
  role: z.enum(['user', 'admin']).default('user'),
});
