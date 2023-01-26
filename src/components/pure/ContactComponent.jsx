import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({contact}) {
  return (
  
    <div>
      <h2>
        Name:{contact.name}
      </h2>
      <h2>
        Last Name:{contact.lastName}
      </h2>
      <h2>
        Email:{contact.email}
      </h2>
      <h2>
        Status:{contact.conectado? ' En Línea': ' No Disponible'}
      </h2>  
    </div>
  )
}

Contact.propTypes = {
    contact : PropTypes.instanceOf(Contact)


}

export default ContactComponent


