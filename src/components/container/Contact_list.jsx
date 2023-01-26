import React from 'react'
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent';

const Contact_list = () => {
  const defaultcontact = new Contact('Symon', 'Lopez', 'simon16143@gmail.com',false)

  return (
    <div>
        <div>
            Your Contact:
            <ContactComponent contact={defaultcontact} />
        </div>
    </div>
    
    
  )
}

export default Contact_list