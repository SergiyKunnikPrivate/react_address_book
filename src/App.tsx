import React, { useState } from 'react';
import './App.css';

import ContactList from './components/ContactList';
import SearchInput from './components/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import Contact from './components/Contact';

function App() {  

  const contactsState = useSelector((state: RootStore) => state.contacts);

  const selectedContact = () => {
    return (
      <div className="selectedContact">
        <h3>Selected contact:</h3>
        <Contact contact={contactsState.selected.contact!} />
      </div>
    )
  }
  return (
    <div className="App">

      <SearchInput />
      {contactsState.selected.isSelected && selectedContact()}
      <hr/>
      { !contactsState.loading && <ContactList  />}
    </div>
  );
}

export default App;
