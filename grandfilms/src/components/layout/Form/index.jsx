import React from "react";
import "./style.css"


export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="card">
            <form
                className="emailForm"
                onSubmit={this.submitForm}
                action="https://formspree.io/meqlyyka"
                method="POST"
            >
                <fieldset id="fs-frm-inputs">
                    <div className="form-group">
                        <label className="exampleInputName" for="full-name">Full Name</label>
                        <input className="form-control" type="text" name="name" id="full-name" placeholder="First and Last" required=""></input>
                    </div>
                    <div className="form-group">
                        <label for="email-address">Email Address</label>
                        <input className="form-control" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""></input>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea  className="form-control" rows="5" name="message" id="message" placeholder="Enter Message Here" required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                    </div>
                <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
                </fieldset>
            </form>
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}