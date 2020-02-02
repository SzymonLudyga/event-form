const eventDateDummy = Date.now();

const formDummies = [
    // success
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@test.com',
        eventDate: eventDateDummy,
    },
    // fail - first name does not exist
    {
        lastName: 'Kowalski',
        email: 'kowalski@test.com',
        eventDate: eventDateDummy,
    },
    // fail - first name is not valid
    {
        firstName: 'John123',
        lastName: 'Doe',
        email: 'invalidjohndoe1@test.com',
        eventDate: eventDateDummy,
    },
    // fail - last name does not exist
    {
        firstName: 'Amy',
        email: 'amy@test.com',
        eventDate: eventDateDummy,
    },
    // fail - last name is not valid
    {
        firstName: 'John',
        lastName: 'Doe321',
        email: 'invalidjohndoe2@test.com',
        eventDate: eventDateDummy,
    },
    // fail - first name and last name does not exist
    {
        email: 'kowalski@test.com',
        eventDate: eventDateDummy,
    },
    // fail - email does not exist
    {
        firstName: 'Amy',
        lastName: 'Kowalski',
        eventDate: eventDateDummy,
    },
    // fail - email is not valid
    {
        firstName: 'Amy',
        lastName: 'Kowalski',
        email: 'amykowalskiwithinvalidemail@test...com',
        eventDate: eventDateDummy,
    },
    // fail - event date does not exist
    {
        firstName: 'Jack',
        lastName: 'Sparrow',
        email: 'jacksparrow@test.com',
    },
];

module.exports = { formDummies };
