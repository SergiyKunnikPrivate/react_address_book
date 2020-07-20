import React from 'react';
import { Contact as ContactI } from '../types/contacts.types';
import './Contact.css';

function Contact(props: {contact: ContactI}): JSX.Element {
  const {contact} = props;
  return (
    <div className="contact">
      <h5>{ contact.name }</h5>
      <p>Phone number: { contact.phoneNumber }</p>
      <p>Address: { contact.address }</p>
      <hr/>
    </div>
  )
}

export default Contact;