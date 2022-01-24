import faker from 'faker';
// ----------------------------------------------------------------------

const talent = [...Array(24)].map((_, index) => ({
    id: index,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    regno: index * index,
    skill: faker.name.lastName(),
    session: index * index,
}));

export default talent;