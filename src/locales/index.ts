import en from './en.json';
import fa from './fa.json';

export const messages = {
  en,
  fa,
};

// Define type for the translation keys
export type MessageSchema = typeof en;
