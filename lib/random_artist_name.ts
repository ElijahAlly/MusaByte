const reader = require('any-text');

const getRandomArtistName = async () => {
    let data = '';

    for (let i = 1; i < 5; i++) {
        data += await reader.getText(
            `./9912f7a366c62c1f296c-dd94a25492b3062f4ca0dc2bb2cdf23fec0896ea/10000-MTV-Music-Artists-page-${i}.csv`
        )
    }

    const splitData = data.split('\n');
    const artistNames = [];

    for (let i = 1; i < splitData.length; i++) {
        let name = splitData[i].split(',')[0];
        artistNames.push(name.slice(1, name.length-1));
    }

    const randNum = () => Math.floor(Math.random() * (artistNames.length - 0 + 1) + 0);
    
    return artistNames[randNum()];
};

// ${Math.floor(Math.random() * (1000 - 3 + 1) + 3)} // use and append to generated artist name for less repeats
 
export default getRandomArtistName;