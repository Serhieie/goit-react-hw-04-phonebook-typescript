import { Contact } from 'components/ContactTable/ContactTable.types';

export interface ContactTableItemProps {
  contact: Contact;
  index: number;
  onDeleteContact: (id: string) => void;
}
