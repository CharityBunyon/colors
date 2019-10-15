import c from './helpers/data/colors';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
  colors.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let b = 0; b < colors.length; b += 1) {
    if (colors[b].hexValue[0] === 'f') {
      newColors.push(colors[b]);
    }
  }
  console.log('for', newColors);
  const filterColors = colors.filter((x) => x.hexValue[0] === 'f');
  console.log('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let a = 0; a < colors.length; a += 1) {
    if (colors[a].name === 'green') {
      colorToFind = colors[a];
    }
  }
  console.log('for', colorToFind.hexValue);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  const h1Tags = [];
  for (let d = 0; d < colors.length; d += 1) {
    h1Tags.push(`<h1>${colors[d].name}</h1>`);
  }
  console.log('for', h1Tags);
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  let total = 0;
  for (let e = 0; e < colors.length; e += 1) {
    total += colors[e].upVotes;
  }
  console.log('for', total);
  const upVotesTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVotesTotal);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
