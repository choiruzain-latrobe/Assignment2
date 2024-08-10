import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [name, setName] = useState('');

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setName('');
    }

	return (
        <form className='new-contact' onSubmit={createContact}>
            <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}

export default NewContact;