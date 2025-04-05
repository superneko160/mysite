import * as v from "valibot";
import { emailSchema, messageSchema } from "./contactSchema";
import type { ValidateContactForm } from "./../../types/ValidateContactForm";

export const validateContactForm = (
  formData: FormData,
): ValidateContactForm => {
  const emailResult = v.safeParse(emailSchema, formData.get("email"));
  const messageResult = v.safeParse(messageSchema, formData.get("message"));

  if (!emailResult.success) {
    return { success: false, error: emailResult.issues[0].message };
  }

  if (!messageResult.success) {
    return { success: false, error: messageResult.issues[0].message };
  }

  return {
    success: true,
    data: {
      email: emailResult.output,
      message: messageResult.output,
    },
  };
};
