import faker from 'faker';
// ----------------------------------------------------------------------

const user = [...Array(24)].map((_, index) => ({
    userid: index+1,
    username: faker.name.firstName(),
    department: faker.name.firstName(),
    email: faker.internet.email(),
    Invoices:[{
        invoiceid:index*index+48237,
        status:'confirmed',
        duedate:'2022:03:'+index+1+':19:46:15'
    },],
    Subscription:{
        planname:'Premium'
    }
}));

export default user;