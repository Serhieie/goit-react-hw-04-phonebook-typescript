import React, { useState } from 'react';
import { TbUserSearch } from 'react-icons/tb';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTable } from 'components/ContactTable/ContactTable';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import normalizePhoneNumber from '../../helpers/numberNormalize';
import { Contact } from './App.styles';

export const App = (): JSX.Element => {
  const [filter, setFilter] = useState<string>('');
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const addContact = (name: string, number: string): void => {
    const contact: Contact = {
      id: nanoid(),
      name,
      number: normalizePhoneNumber(number),
    };
    setContacts((prevContacts: Contact[]) => [contact, ...prevContacts]);
  };

  const deleteContact = (contactId: string): void => {
    setContacts((prevContacts: Contact[]) =>
      prevContacts.filter((contact: Contact) => contact.id !== contactId)
    );
  };

  const getVisibleContacts = (): Contact[] => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact: Contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts: Contact[] = getVisibleContacts();

  return (
    <div
      className="
      flex gap-4 justify-around mx-auto w-9/12 mt-10 p-8
      rounded shadow-xl shadow-shadowBox md:flex-col
      md:items-center md:text-base md:py-6 md:px-1.5 md:w-11/12
      text-xl text-darkFont min-h-562 select-none 
      bg-gradient-to-tr from-gradientColor1 to-gradientColor2"
    >
      <ContactForm contacts={contacts} onSubmit={addContact} />
      <div
        className="w-8/12 flex justify-center items-center 
        flex-col px-5 pr-4 rounded-sm shadow-lg shadow-shadowBox
        min-h-562 select-none bg-gradient-to-tr from-smallWraperGradient1
        to-smallWraperGradient2 relative md:mt-5 md:py-7 md:px-5
        md:w-11/12"
      >
        <TbUserSearch
          className="absolute  w-4 h-4 top-9 left-1/3
          opacity-40 z-10 text-filterPlaceholderColor md:w-5 md:h-5 
          md:top-16 md:left-1/4 md2:max-w-sm md2:top-9 md2:left-1/5 ssm:hidden"
        />
        <Filter
          value={filter}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFilter(event.target.value)
          }
        />
        <ContactTable
          getVisibleContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};
