import faker from 'faker';
// ----------------------------------------------------------------------

const talent = [...Array(24)].map((_, index) => ({
    id: index,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    regno: 80,
    skill: faker.name.lastName(),
    session: 2018,
    department:'Computer Science',
    language:"C++ ,Java, Python",
    certification:"Microsoft Excel, Visual Studio",
    experience:"3 Month Internship Proram"
}));

export default talent;