import { z } from 'zod';

export const biodataSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    dateOfBirth: z.string(),
    gender: z.enum(['male', 'female', 'other']),
    height: z.string(),
    weight: z.string(),
    religion: z.string(),
    maritalStatus: z.enum(['single', 'divorced', 'widowed']),
  }),
  contactInfo: z.object({
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
  }),
  education: z.object({
    highestQualification: z.string(),
    institution: z.string(),
    occupation: z.string(),
    income: z.string(),
  }),
  familyInfo: z.object({
    fatherName: z.string(),
    motherName: z.string(),
    siblings: z.string(),
  }),
});