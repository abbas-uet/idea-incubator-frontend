import faker from 'faker';
// ----------------------------------------------------------------------

const department = [...Array(24)].map((_, index) => ({
    id: index,
    departmentname: faker.name.firstName(),
    noofadmins: index * index,

}));

export default department;