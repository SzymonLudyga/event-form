import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

export default class Form extends Component {
    onInputChange = (e) => {
        const { changeValue } = this.props;
        const { id, value } = e.target;
        changeValue(id, value);
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
                <div className={classes.title}>Brainhub Form</div>
                {errors.unknown_error
                    ? <div className={classes.errorMessage}>{errors.unknown_error}</div>
                    : <div className={classes.spacing} />}
                <TextField
                    className={classes.input}
                    autoFocus
                    label="First name"
                    placeholder="John"
                    id="firstName"
                    type="text"
                    onChange={this.onInputChange}
                    value={firstName}
                />
                {errors.first_name
                    ? <div className={classes.errorMessage}>{errors.first_name}</div>
                    : <div className={classes.spacing} />}
                <TextField
                    className={classes.input}
                    label="Last name"
                    placeholder="Doe"
                    id="lastName"
                    type="text"
                    onChange={this.onInputChange}
                    value={lastName}
                />
                {errors.last_name
                    ? <div className={classes.errorMessage}>{errors.last_name}</div>
                    : <div className={classes.spacing} />}
                <TextField
                    className={classes.input}
                    label="Email address"
                    placeholder="johndoe@gmail.com"
                    id="email"
                    type="email"
                    onChange={this.onInputChange}
                    value={email}
                />
                {errors.email
                    ? <div className={classes.errorMessage}>{errors.email}</div>
                    : <div className={classes.spacing} />}
                <TextField
                    className={classes.input}
                    id="eventDate"
                    label="Event Date"
                    type="date"
                    onChange={this.onInputChange}
                    value={eventDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {errors.event_date
                    ? <div className={classes.errorMessage}>{errors.event_date}</div>
                    : <div className={classes.spacing} />}
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={submitForm}
                >
                Send
                </Button>
                {successMessage
                    ? <div className={classes.successMessage}>{successMessage}</div>
                    : <div className={classes.spacing} />}
            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    status: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    changeValue: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
};
