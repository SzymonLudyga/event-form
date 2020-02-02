import React, { Component } from 'react';
import { Button } from '@material-ui/core';


class Form extends Component {
    onInputChange = (e) => {
        const { id, value } = e.target;
        this.props.changeValue(id, value);
    }

    render() {
        const {
            form, classes, errors, submitForm, status,
        } = this.props;
        const { loading, successMessage } = status;
        const {
            firstName, lastName, email, eventDate,
        } = form;
        return (
            <div className={classes.container}>
                <div className={classes.title}>Form</div>
                <div>First name</div>
                <input
                    placeholder="Enter first name"
                    id="firstName"
                    type="text"
                    onChange={this.onInputChange}
                    value={firstName}
                />
                <div>{errors.first_name}</div>
                <div>Last name</div>
                <input
                    placeholder="Enter last name"
                    id="lastName"
                    type="text"
                    onChange={this.onInputChange}
                    value={lastName}
                />
                <div>{errors.last_name}</div>
                <div>Email</div>
                <input
                    placeholder="Enter email address"
                    id="email"
                    type="email"
                    onChange={this.onInputChange}
                    value={email}
                />
                <div>{errors.email}</div>
                <div>Event Date</div>
                <input
                    id="eventDate"
                    type="date"
                    onChange={this.onInputChange}
                    value={eventDate}
                />
                <div>{errors.event_date}</div>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={submitForm}
                >
                Send
                </Button>
                <div>{successMessage}</div>
            </div>
        );
    }
}

export default Form;
