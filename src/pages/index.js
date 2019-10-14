import React from 'react';
import { Link } from  'react-router-dom';

const ContactPage = () => {
  return(
    <div>
      This is the contact page
      <button>
        <Link to="/"> Navigate to index </Link>
      </button>
    </div>
  )
}

export default ContactPage