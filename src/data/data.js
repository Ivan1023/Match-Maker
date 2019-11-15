import AndrePhoto from './andre.jpg';
import YashPhoto from './yash.jpg';
import JoshPhoto from './josh.jpg';
import RoyPhoto from './roy.jpg';
import lakeMountain from './lake-mountain.jpeg'
import lake from './lake.jpeg'
import purpleLandscape from './purple-landscape.jpeg'
import purpleMountain from './purple-mountains.jpeg'


const cards = [
    {
        id: 1,
        name: 'Andre',
        image: AndrePhoto,
    },
    {
        id: 2,
        name: 'Yash',
        image: YashPhoto,
    },
    {
        id: 3,
        name: 'Josh',
        image: JoshPhoto,
    },
    {
        id: 4,
        name: 'Roy',
        image: RoyPhoto,
    },
    {
        id: 5,
        name: 'Lake',
        image: lake,
    },
    {
        id: 6,
        name: 'LakeMountain',
        image: lakeMountain,
    },
    {
        id: 7,
        name: 'PurpleLandscape',
        image: purpleLandscape,
    },
    {
        id: 8,
        name: 'PurpleMountain',
        image: purpleMountain,
    },
]




// make a duplicate of each object inside the array
const duplicatedCards = cards.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue.concat([currentValue, currentValue])
}, []);

export { cards, duplicatedCards }