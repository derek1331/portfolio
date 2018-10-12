import React from 'react';
import './Contact.css'
import Button from "../Button"

  
const Contact = () => (
    
    <div id="section-3" className='hero flex contact'>
    <div className='section flex'>
        <div className='hero-message'>
            <span >Contact</span>    
        </div>
        <Button text='About'/>
        <Button text='Projects'/>
        <Button text='Contact'/>

    </div>
    </div>

)

export default Contact;