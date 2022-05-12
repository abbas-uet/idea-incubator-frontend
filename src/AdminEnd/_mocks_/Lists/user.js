// utils
import {mockImgAvatar} from '../../utils/mockImages';
import faker from 'faker';
// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
    userid: index+1,
    username: faker.internet.email(),
    email: faker.internet.email(),
    Idea:{
        projectname: faker.name.firstName()
    },
    subusers: [faker.name.lastName(),faker.name.lastName(),faker.name.lastName(),faker.name.lastName()],
}));

export default users;
