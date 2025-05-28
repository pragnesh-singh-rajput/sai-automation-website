
"use server";

import { contactFormSchema, type ContactFormState } from "./schemas";

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For now, we'll just log it and return a success message.
  console.log("Contact form submitted:", parsed.data);

  return {
    message: "Thank you for your message! We will get back to you soon.",
    success: true,
  };
}
