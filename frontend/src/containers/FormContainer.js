import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Form from '../components/Form';
import { changeValue, submitForm } from '../actions/form';

const styles = () => ({
    container: {
        margin: 'auto',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '50%',
        border: '1px solid blue',
        borderRadius: '10px',
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: '30px',
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
