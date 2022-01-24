import faker from 'faker';
// ----------------------------------------------------------------------

const assets = [...Array(24)].map((_, index) => ({
    id: index,
    name: faker.name.firstName(),
    quantity: index * index,
    description: "lorem vhuwidbvbb  rubfeui beruivui ruib irbubv iervuie hbruib huierbvu heruibbv",
}));

export default assets;