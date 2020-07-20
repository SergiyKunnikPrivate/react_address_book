
import React from 'react';
import './ContactList.css';
import { RootStore } from '../redux/store';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import { Contact as  ContactI} from '../types/contacts.types';
import { selectContact } from '../redux/actions/contacts-actions';

function ContactList(): JSX.Element {

  const dispatch = useDispatch();
  const contactsState = useSelector((state: RootStore) => state.contacts);



  const selectContactHandler = (contact: ContactI ) => dispatch(selectContact(contact))

  return <div className="ContactList">
    {contactsState.contacts.map(contact => {
      return <div onClick={event => selectContactHandler(contact)} className="onPress">
        <Contact contact={contact} />
      </div>
    })}

  </div>
}
export default ContactList