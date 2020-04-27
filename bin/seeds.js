const mongoose = require('mongoose');
const Game = require('../models/game');

mongoose.connect("mongodb://localhost/project2-v2-basic-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const games = [
  {
      title: 'Space Invaders',
      gameUrl: 'https://marciafurtado.github.io/Project1-Space-Invaders/',
      gitHubUrl: 'https://github.com/marciafurtado',
      author: 'Marcia Furtado',
      bootcamp: 'March/2020',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
      title: 'Zombie Game',
      gameUrl: 'https://jeff-moraes.github.io/Zombie-Game/',
      gitHubUrl: 'https://github.com/jeff-moraes',
      author: 'Jefferson Moraes',
      bootcamp: 'October/2019',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
      title: 'Ghost Town',
      gameUrl: 'https://pavlitsa.github.io/game-project-ghost-town/',
      gitHubUrl: 'https://github.com/pavlitsa',
      author: 'Pavlina Zafeiri',
      bootcamp: 'October/2019',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  
];

Game.insertMany(games).then(data => {
  console.log('Success');
  mongoose.connection.close();
}).catch(err => {
  console.log(err);
});