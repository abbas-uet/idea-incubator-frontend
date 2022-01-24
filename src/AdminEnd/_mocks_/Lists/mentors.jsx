import faker from 'faker';
// ----------------------------------------------------------------------

const mentors = [...Array(24)].map((_, index) => ({
    id: index,
    name: faker.name.firstName(),
    username: faker.internet.email(),
    email: faker.internet.email(),
    field: faker.company.companyName()
}));

export default mentors;