import React from 'react';
import { Provider } from 'react-redux';
import FormContainer from './containers/FormContainer';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <FormContainer />
        </Provider>
    );
}
