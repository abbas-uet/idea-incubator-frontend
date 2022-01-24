import faker from 'faker';
// ----------------------------------------------------------------------

const ideas = [...Array(24)].map((_, index) => ({
    id: index,
    email: faker.internet.email(),
    name: faker.name.firstName(),
    field: faker.name.lastName(),
    projectname: faker.name.firstName(),
}));

export default ideas;