// utils
import {mockImgAvatar} from '../../utils/mockImages';
import faker from 'faker';
// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
    id: index,
    username: faker.internet.email(),
    email: faker.internet.email(),
    projectname: faker.name.firstName(),
    subusers: faker.name.lastName(),
}));

export default users;
