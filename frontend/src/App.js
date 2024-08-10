import { useState, useEffect } from 'react';  // import useEffect
import ContactList from './components/ContactList';
import Stats from './components/Stats';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className='page'>
            <h1>Contactor</h1>
            <ContactList contacts={contacts} setContacts={setContacts} />
            <p>Click a contact to view associated phone numbers</p>
            <Stats />
        </div>
    );
}

export default App;