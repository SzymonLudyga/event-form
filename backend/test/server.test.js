/* eslint "no-undef": 0 */
/* eslint "no-underscore-dangle": 0 */

const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { errors } = require('../db/Form');
const { formDummies } = require('./seed');

describe('Success case', () => {
    it('- should SUCCESSFULLY create form document in database', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[0])
            .expect(200)
            .expect((res) => {
                const parsedDate = Date.parse(res.body.form.event_date);
                expect(res.body.details).toBe('New event form entry added.');
                expect(res.body.form.email).toBe(formDummies[0].email);
                expect(res.body.form.first_name).toBe(formDummies[0].firstName);
                expect(res.body.form.last_name).toBe(formDummies[0].lastName);
                expect(parsedDate).toBe(formDummies[0].eventDate);
                expect(res.body.form._id).toBeTruthy();
            })
            .end(done);
    });

    it('- should SUCCESSFULLY delete single form entry', (done) => {
        request(app)
            .delete('/form')
            .expect(200)
            .expect((res) => {
                expect(res.body.details).toBe('Test forms successfully deleted');
                expect(res.body.deleted).toBe(1);
            })
            .end(done);
    });
});

describe('Fail cases', () => {
    it('- should not create form WITHOUT first name', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[1])
            .expect(400)
            .expect((res) => {
                const firstNameError = res.body.errorsArray[0];
                expect(firstNameError[0]).toBe('first_name');
                expect(firstNameError[1]).toBe(errors.noFirstName);
            })
            .end(done);
    });

    it('- should not create form WITH INVALID first name', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[2])
            .expect(400)
            .expect((res) => {
                const firstNameError = res.body.errorsArray[0];
                expect(firstNameError[0]).toBe('first_name');
                expect(firstNameError[1]).toBe(errors.invalidFirstName);
            })
            .end(done);
    });

    it('- should not create form WITHOUT last name', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[3])
            .expect(400)
            .expect((res) => {
                const lastNameError = res.body.errorsArray[0];
                expect(lastNameError[0]).toBe('last_name');
                expect(lastNameError[1]).toBe(errors.noLastName);
            })
            .end(done);
    });

    it('- should not create form WITH INVALID last name', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[4])
            .expect(400)
            .expect((res) => {
                const lastNameError = res.body.errorsArray[0];
                expect(lastNameError[0]).toBe('last_name');
                expect(lastNameError[1]).toBe(errors.invalidLastName);
            })
            .end(done);
    });

    it('- should not create form WITHOUT first and last name', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[5])
            .expect(400)
            .expect((res) => {
                const firstNameError = res.body.errorsArray[0];
                const lastNameError = res.body.errorsArray[1];
                expect(firstNameError[0]).toBe('first_name');
                expect(firstNameError[1]).toBe(errors.noFirstName);
                expect(lastNameError[0]).toBe('last_name');
                expect(lastNameError[1]).toBe(errors.noLastName);
            })
            .end(done);
    });

    it('- should not create form WITHOUT email', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[6])
            .expect(400)
            .expect((res) => {
                const emailError = res.body.errorsArray[0];
                expect(emailError[0]).toBe('email');
                expect(emailError[1]).toBe(errors.noEmail);
            })
            .end(done);
    });

    it('- should not create form WITH INVALID email', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[7])
            .expect(400)
            .expect((res) => {
                const emailError = res.body.errorsArray[0];
                expect(emailError[0]).toBe('email');
                expect(emailError[1]).toBe(errors.invalidEmail);
            })
            .end(done);
    });

    it('- should not create form WITHOUT event date', (done) => {
        request(app)
            .post('/form')
            .send(formDummies[8])
            .expect(400)
            .expect((res) => {
                const eventDateError = res.body.errorsArray[0];
                expect(eventDateError[0]).toBe('event_date');
                expect(eventDateError[1]).toBe(errors.noEventDate);
            })
            .end(done);
    });

    it('- should be NO form entries to delete', (done) => {
        request(app)
            .delete('/form')
            .expect(200)
            .expect((res) => {
                expect(res.body.details).toBe('No forms to be deleted');
                expect(res.body.deleted).toBe(0);
            })
            .end(done);
    });
});
