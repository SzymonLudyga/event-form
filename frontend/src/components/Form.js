import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import sendForm from '../api';
import { changeValue } from '../actions/form';

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
    onInputChange = (e) => {
        const { id, value } = e.target;
        this.props.changeValue(id, value);
    }

    render() {
        const { form, classes } = this.props;
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
                <button onClick={() => sendForm(form)}>SEND</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (id, value) => dispatch(changeValue(id, value))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Form));
