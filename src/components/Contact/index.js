import React from 'react';
import {FcPhone, FcGoogle} from 'react-icons/fc'

function Contact() {
    return (
        <section>
            <h2 id="contact">Contact us with any questions</h2>
            <address>
            <FcPhone/> <a href='tel:+18018540370'>801-854-0370</a><br></br>
            <FcGoogle/><a href='mailto: doggiedoosut@gmail.com'>doggiedoosut@gmail.com</a>
            </address>
        </section>
    )
}

export default Contact;