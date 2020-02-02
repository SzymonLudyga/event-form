import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import sendForm from '../api';

const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
    title: {
        fontSize: '30px',
    },
});

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFields: {
                firstName: '',
                lastName: '',
                email: '',
                eventDate: '',
            },
        };
    }

    onInputChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                [id]: value,
            },
        });
    }

    render() {
        const { classes } = this.props;
        const { inputFields } = this.state;
        const {
            firstName, lastName, email, eventDate,
        } = inputFields;
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
                <div>Last name</div>
                <input
                    placeholder="Enter last name"
                    id="lastName"
                    type="text"
                    onChange={this.onInputChange}
                    value={lastName}
                />
                <div>Email</div>
                <input
                    placeholder="Enter email address"
                    id="email"
                    type="email"
                    onChange={this.onInputChange}
                    value={email}
                />
                <div>Event Date</div>
                <input
                    id="eventDate"
                    type="date"
                    onChange={this.onInputChange}
                    value={eventDate}
                />
                <button onClick={() => sendForm(inputFields)}>SEND</button>
            </div>
        );
    }
}

export default withStyles(styles)(Form);
