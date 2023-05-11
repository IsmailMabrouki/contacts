import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    const fetchContacts = () => {
      // Replace the API call with your local data
      const data = {
        contactList: [
          {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '123-456-7890'
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            phone: '555-555-5555'
          },
          {
            id: 3,
            name: 'Bob Johnson',
            email: 'bobjohnson@example.com',
            phone: '111-222-3333'
          }
        ]
      };
    
      setContacts(data.contactList);
    };
    

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact Manager</h1>
      <Contact handleSubmit={handleSubmit} />
      <Contacts contacts={contacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

// Path: contacts\src\components\Contact.js
// Compare this snippet from contacts\src\components\Contact.js: