import faker from 'faker';
// ----------------------------------------------------------------------

const typeOfStaus = [['pending', 'error'], ['initiated', 'secondary'], ['completed', 'primary']]
const invoice = [...Array(24)].map((_, index) => ({
    id: index,
    createdon: '12/12/2022 wednesday',
    duedate: '1/2/2022 wednesday',
    billingperson: faker.name.firstName(),
    paymentmethod: faker.company.companyName(),
    ammount: index * index,
    status: typeOfStaus[index % 3]
}));

export default invoice;