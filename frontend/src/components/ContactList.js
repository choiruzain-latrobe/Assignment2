import Contact from './Contact.js';
import NewContact from './NewContact.js';

function ContactList(props) {
    const {contacts, setContacts} = props;

	return (
		<div className='contact-list'>
            <h2>Contacts</h2>

            <NewContact contacts={contacts} setContacts={setContacts} />

            <hr />

            {
                contacts.map((contact) => {
                    return (
                        <Contact key={contact.id} contact={contact} contacts={contacts} setContacts={setContacts} />
                    );
                })
            }
        </div>
	);
}

export default ContactList;
