import faker from 'faker';
// ----------------------------------------------------------------------

const admin = [...Array(24)].map((_, index) => ({
    id: index,
    username: faker.name.firstName(),
    department: faker.name.firstName(),
    email: faker.internet.email(),
}));

export default admin;