import type { ContactForm } from "./../ContactForm";

export type ValidateContactForm = {
  success: boolean;
  error?: string;
  data?: ContactForm;
};
