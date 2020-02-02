import React from 'react';
import Form from './components/Form';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <Form />
        </Provider>
    );
}
