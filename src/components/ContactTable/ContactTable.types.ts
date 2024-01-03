export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactTableProps {
  getVisibleContacts: Contact[];
  onDeleteContact: (id: string) => void;
}
