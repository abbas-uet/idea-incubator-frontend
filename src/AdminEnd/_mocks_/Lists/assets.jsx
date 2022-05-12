import faker from 'faker';
// ----------------------------------------------------------------------

const assets = [...Array(24)].map((_, index) => ({
    id: index+1,
    name: faker.name.firstName(),
    quantity: index * index,
    type:faker.name.firstName(),
    category:faker.name.firstName(),
    time:index*index*index+23,
    location:faker.name.firstName(),
    days:index+index+1,
    description: "lorem vhuwidbvbb  rubfeui beruivui ruib irbubv iervuie hbruib huierbvu heruibbv",
}));

export default assets;