export interface Contact {
  name: string;
  number: string;
}

export interface ContactFormProps {
  contacts: Contact[];
  onSubmit: (name: string, number: string) => void;
}
