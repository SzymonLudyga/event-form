/* eslint "no-undef": 0 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

const errors = {
    noFirstName: 'Please fill in first name.',
    invalidLastName: 'Last name should contain only letters.',
    invalidEmail: 'Please enter valid email address.',
    noEventDate: 'Please fill in event date.',
};

describe('FAIL CASES', () => {
    test('renders error when sending a form WITHOUT first name', async () => {
        render(<App />);

        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: '' },
        });
        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Sparrow' },
        });
        fireEvent.change(screen.getByLabelText(/Email address/i), {
            target: { value: 'jacksparrow@test.pl' },
        });
        fireEvent.change(screen.getByLabelText(/Event date/i), {
            target: { value: '02-02-2020' },
        });

        fireEvent.click(screen.getByText(/Send/i));


        const firstNameError = await screen.findByRole('first-name-error');
        expect(firstNameError).toHaveTextContent(errors.noFirstName);
    });

    test('renders error when sending a form WITH INVALID last name', async () => {
        render(<App />);

        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'Jack' },
        });
        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Sparrow1111' },
        });
        fireEvent.change(screen.getByLabelText(/Email address/i), {
            target: { value: 'jacksparrow@test.pl' },
        });
        fireEvent.change(screen.getByLabelText(/Event date/i), {
            target: { value: '02-02-2020' },
        });

        fireEvent.click(screen.getByText(/Send/i));
        const lastNameError = await screen.findByRole('last-name-error');
        expect(lastNameError).toHaveTextContent(errors.invalidLastName);
    });

    test('renders error when sending a form WITH INVALID email', async () => {
        render(<App />);

        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'Jack' },
        });
        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Sparrow1111' },
        });
        fireEvent.change(screen.getByLabelText(/Email address/i), {
            target: { value: 'jacksparrow@@@@test.pl' },
        });
        fireEvent.change(screen.getByLabelText(/Event date/i), {
            target: { value: '02-02-2020' },
        });

        fireEvent.click(screen.getByText(/Send/i));
        const emailError = await screen.findByRole('email-error');
        expect(emailError).toHaveTextContent(errors.invalidEmail);
    });

    test('renders error when sending a form WITHOUT event date', async () => {
        render(<App />);

        fireEvent.change(screen.getByLabelText(/First name/i), {
            target: { value: 'Jack' },
        });
        fireEvent.change(screen.getByLabelText(/Last name/i), {
            target: { value: 'Sparrow1111' },
        });
        fireEvent.change(screen.getByLabelText(/Email address/i), {
            target: { value: 'jacksparrow@test.pl' },
        });
        fireEvent.change(screen.getByLabelText(/Event date/i), {
            target: { value: '' },
        });

        fireEvent.click(screen.getByText(/Send/i));
        const eventDateError = await screen.findByRole('event-date-error');
        expect(eventDateError).toHaveTextContent(errors.noEventDate);
    });
});
