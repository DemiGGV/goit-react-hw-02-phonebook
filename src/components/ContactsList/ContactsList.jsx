// import { FormContainerCSS } from './MainContainerCSS';

export const ContactsList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button type="button" data-id={contact.id} onClick={onDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
