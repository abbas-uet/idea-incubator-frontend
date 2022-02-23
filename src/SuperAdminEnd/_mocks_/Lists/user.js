// utils
import {mockImgAvatar} from '../../utils/mockImages';
import faker from 'faker';
// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
    id: index,
    username: faker.name.firstName(),
    email: faker.internet.email(),
    subscription: faker.name.firstName(),
    lastinvoice: faker.name.lastName(),
    status: faker.name.lastName(),
    duedate: faker.name.firstName(),
}));

export default users;
