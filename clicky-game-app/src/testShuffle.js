let characters = [
  {
    id: 1,
    name: 'Fox',
    image: '../images/SSBM_Fox_HQ.jpg'
  },
  {
    id: 2,
    name: 'Falco',
    image: '../images/Falco.png'
  },
  {
    id: 3,
    name: 'Marth',
    image: '../images/Marth.png'
  },
  {
    id: 4,
    name: 'Sheik',
    image: '../images/Sheik.jpg'
  },
  {
    id: 5,
    name: 'Jigglypuff',
    image: '../images/Jigglypuff.png'
  },
  {
    id: 6,
    name: 'Captain Falcon',
    image: '../images/Captain_Falcon.jpg'
  },
  {
    id: 7,
    name: 'Peach',
    image: '../images/Peach.jpg'
  },
  {
    id: 8,
    name: 'Ice Climbers',
    image: '../images/Ice_Climbers.jpg'
  },
  {
    id: 9,
    name: 'Pikachu',
    image: '../images/Pikachu.jpg'
  },
  {
    id: 10,
    name: 'Yoshi',
    image: '../images/Yoshi.jpg'
  },
  {
    id: 11,
    name: 'Samus',
    image: '../images/Samus.jpg'
  },
  {
    id: 12,
    name: 'Mario',
    image: '../images/Mario.png'
  }
];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function printNames(arr) {
  arr.forEach(char => {
    console.log(`${char.id}. ${char.name}`);
  });
  console.log('\n');
}

printNames(characters);
shuffleArray(characters);
printNames(characters);
