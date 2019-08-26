import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup'
import firestore from "../config/Fire.js";
import { toast } from 'react-toastify';

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email.")
        .required("Email is required."),
    name: yup
        .string()
        .required("Your name is required."),
    message: yup
        .string()
        .required("A message is required."),
})

const initialFormState = {
  email: "",
  name: "",
  message: ""
};


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.state = {};
  }

  addMessage(email, name, message){
    firestore.collection('messages').add({
        email: email,
        name: name,
        message: message,
        timestamp: Date.now(),
        // subscribed: true
    }).then(toast.success("Thanks for the message!"));
  }

  render() {
    return (
    <div>
        <Formik
          initialValues={initialFormState}
          onSubmit={(values, actions) => {
            this.addMessage(values.email, values.name, values.message);
            actions.resetForm()
          }}
          validationSchema={formSchema}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <label for="email">Email: </label>
              <Field
                type="email"
                placeholder="john.doe@mail.com"
                className="box"
                onChange={props.handleChange}
                name="email"
                value={props.values.email}
              />
              <br/>
              {props.errors.email && props.touched.email ? (
                <span className="red">{props.errors.email}</span>
              ) : (
                ""
              )}
              <br/>
              <label for="name">Full name: </label>
              <Field
                type="text"
                placeholder="John Doe"
                className="box"
                onChange={props.handleChange}
                name="name"
                value={props.values.name}
              />
              <br/>
              {props.errors.name && props.touched.name ? (
                <span className="red">{props.errors.name}</span>
              ) : (
                ""
              )}
              <br/>
              <label for="message">Message: </label>
              <Field
                component="textarea"
                placeholder="Enter a message"
                className="box"
                onChange={props.handleChange}
                name="message"
                value={props.values.message}
              />
              <br/>
              {props.errors.message && props.touched.message ? (
                <span className="red">{props.errors.message}</span>
              ) : (
                ""
              )}
              <br/>
              <div className="center-text">
                <button
                  type="submit"
                  className="m-btn"
                  disabled={!props.dirty && !props.isSubmitting}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ContactForm;
