import React, { Component } from 'react'
import ContactForm from '../ContactForm';

export default class Contact extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Contact Us</h1>
                <p>Send us a message directly or email us at <u>theretreatonnichols@gmail.com</u></p>
                <ContactForm />
            </div>
        )
    }
}
