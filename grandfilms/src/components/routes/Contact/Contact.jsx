import React from 'react'
import "./contact.scss";
import Form from "../../layout/Form"

const Contact = () => {
    return (<div>

        <h2>Contact Us</h2>
        <div className="contactEmailForm">
            <h2 className="title">Shoot Me An Email</h2>
            <Form ></Form>
        </div>
    </div>
    )
}

export default Contact;