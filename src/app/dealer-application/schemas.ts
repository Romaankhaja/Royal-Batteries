import { z } from 'zod';

export const dealerApplicationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).max(15)
    .regex(/^\+?[0-9\s-()]*$/, { message: "Invalid phone number format." }),
  businessName: z.string().max(100).optional(),
  location: z.string().min(3, { message: "Location must be at least 3 characters." }).max(200),
  message: z.string().max(500, { message: "Message cannot exceed 500 characters." }).optional(),
});

export type DealerApplicationFormValues = z.infer<typeof dealerApplicationSchema>;
