import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Form from '../components/Form';
import { changeValue, submitForm } from '../actions/form';

const styles = () => ({
    container: {
        margin: 'auto',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '50%',
        border: '2px solid gray',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        marginLeft: 10,
        width: '50%',
    },
    button: {
        margin: 10,
        width: '35%',
    },
    spacing: {
        height: 30,
    },
    errorMessage: {
        color: 'red',
        height: 30,
        marginLeft: 10,
        fontSize: 10,
    },
    successMessage: {
        color: 'green',
        height: 30,
        marginLeft: 10,
        fontSize: 14,
    },
});

function mapStateToProps(state) {
    return {
        form: state.form,
        errors: state.errors,
        status: state.status,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (id, value) => dispatch(changeValue(id, value)),
        submitForm: () => dispatch(submitForm()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(Form));
