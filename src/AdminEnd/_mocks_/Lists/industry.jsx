import faker from 'faker';
// ----------------------------------------------------------------------

const industry = [...Array(24)].map((_, index) => ({
    id: index,
    username: faker.internet.email(),
    email: faker.internet.email(),
    companyname: faker.company.companyName(),
    services: faker.name.lastName(),
}));

export default industry;