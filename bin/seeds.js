const mongoose = require("mongoose");
const Game = require("../models/game");

mongoose.connect("mongodb://localhost/project2-ironhackgames", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const games = [
  {
    title: "Space Invaders",
    gameUrl: "https://marciafurtado.github.io/Project1-Space-Invaders/",
    gitHubUrl: "https://github.com/marciafurtado",
    author: "Marcia Furtado",
    bootcamp: "March/2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Zombie Game",
    gameUrl: "https://jeff-moraes.github.io/Zombie-Game/",
    gitHubUrl: "https://github.com/jeff-moraes",
    author: "Jefferson Moraes",
    bootcamp: "October/2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
      title: 'Ghost Town',
      gameUrl: 'https://pavlitsa.github.io/game-project-ghost-town/',
      gitHubUrl: 'https://github.com/pavlitsa',
      author: 'Pavlina Zafeiri',
      bootcamp: 'October/2019',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    gameUrl: 'https://julirozhnova.github.io/game-p5/',
    gitHubUrl: 'https://github.com/julirozhnova',
    author: 'Julia Rozhnova',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Queue',
    gameUrl: 'https://ning3l.github.io/game-queue/',
    gitHubUrl: 'https://github.com/ning3l',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Monkey Mania',
    gameUrl: 'https://johannasiven.github.io/javascript-monkey-game/',
    gitHubUrl: 'https://github.com/johannasiven',
    author: 'Johanna Siven',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Taco cat',
    gameUrl: 'https://bleepblopblorpblopbloop.github.io/tacocat/',
    gitHubUrl: 'https://github.com/bleepblopblorpblopbloop',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Red-Riding-Hack',
    gameUrl: 'https://pascalh91.github.io/Game_Ironhack_Redridinghood/',
    gitHubUrl: 'https://github.com/pascalh91',
    author: 'Pascal',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Iron Racer',
    gameUrl: 'https://mikevanyarnrider.github.io/ironRacer/',
    gitHubUrl: 'https://github.com/mikevanyarnrider',
    author: 'Mike van Yarnrider',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Love and Loss',
    gameUrl: 'https://scoley89.github.io/GAMERPGTEXT/',
    gitHubUrl: 'https://github.com/scoley89',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Witch Game',
    gameUrl: 'https://daneklustig.github.io/B-Witch-GAME/',
    gitHubUrl: 'https://github.com/daneklustig',
    author: 'Dane Klustig',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'X-mas Game',
    gameUrl: 'https://shanwong29.github.io/Xmas-game/',
    gitHubUrl: 'https://github.com/shanwong29',
    author: 'Shan Wong',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Free little Octopus',
    gameUrl: 'https://lorelore22.github.io/Game-Project-Module1/',
    gitHubUrl: 'https://github.com/lorelore22',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Dino Dance',
    gameUrl: 'http://fluxpat.github.io/DinoDance_Game',
    gitHubUrl: 'https://github.com/fluxpat',
    author: 'Patrick Cho',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Cartoon Race',
    gameUrl: 'https://ironwyatt.github.io/-BER-WDFT-Floriano_Albertini-GameProjectOne-/',
    gitHubUrl: 'https://github.com/ironwyatt',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Trash of the Titans',
    gameUrl: 'https://feraraujofilho.github.io/EducativeGame/',
    gitHubUrl: 'https://github.com/feraraujofilho',
    author: 'Fer Araujo Filho',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Bike Game',
    gameUrl: 'https://ninoglonti.github.io/BikeGame/',
    gitHubUrl: 'https://github.com/ninoglonti',
    author: 'Nino Glonti',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'The Tourist',
    gameUrl: 'https://mariakristiina.github.io/the-tourist/',
    gitHubUrl: 'https://github.com/mariakristiina',
    author: 'Maria Kristina',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Maria\'s Cake Hunt',
    gameUrl: 'https://arews.github.io/marias-cake-hunt/',
    gitHubUrl: 'https://github.com/arews',
    author: 'Are Sandvik',
    bootcamp: 'October 2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Bonnie and Clyde',
    gameUrl: 'https://whbrown.github.io/Bonnie-and-Clyde/',
    gitHubUrl: 'https://github.com/whbrown',
    author: 'William Brown',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Penguin Jump',
    gameUrl: 'https://aslex.github.io/Module1-Game_Project/index.html',
    gitHubUrl: 'https://github.com/aslex',
    bootcamp: 'October/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Space Grid',
    gameUrl: 'https://mennahisham.github.io/Spacegrid/',
    gitHubUrl: 'https://github.com/mennahisham',
    author: 'Minatallah Hisham',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Go for Gold',
    gameUrl: 'https://akups.github.io/Go-for-Gold/',
    gitHubUrl: 'https://github.com/akups',
    bootcamp: 'January/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'BB8 Infinite Roller',
    gameUrl: 'https://timbotimber.github.io/bb8_infinite_roller/',
    gitHubUrl: 'https://github.com/timbotimber',
    author: 'Tim Stephens',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Ricky',
    gameUrl: 'https://ozhann.github.io/project_rick/',
    gitHubUrl: 'https://github.com/ozhann',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    gameUrl: 'https://kiyokiyo2929.github.io/project_game/',
    gitHubUrl: 'https://github.com/kiyokiyo2929',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Jump Dyno, jump!',
    gameUrl: 'https://lluismanas.github.io/jump-Dino-jump/',
    gitHubUrl: 'https://github.com/lluismanas',
    author: 'Lluís Mañas',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Broco Man',
    gameUrl: 'https://victoriablat.github.io/vb_game_jan/',
    gitHubUrl: 'https://github.com/victoriablat',
    author: 'Victoria Blat',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Codenamez',
    gameUrl: 'https://mialav.github.io/codenamez/',
    gitHubUrl: 'https://github.com/mialav',
    author: 'Mia L',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Leo the Llama',
    gameUrl: 'https://marsu-r.github.io/Game-project/',
    gitHubUrl: 'https://github.com/marsu-r',
    author: 'Marcel R',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Bulb\'o',
    gameUrl: 'https://karo-cz.github.io/GAME-Bulb-O/',
    gitHubUrl: 'https://github.com/karo-cz',
    author: 'Karolina Czarnowska',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Multiverse',
    gameUrl: 'https://stifamajstor.github.io/Multiverse/',
    gitHubUrl: 'https://github.com/stifamajstor',
    author: 'Stjepan',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Frogger',
    gameUrl: 'https://martinschmal.github.io/frogger-clone/',
    gitHubUrl: 'https://github.com/martinschmal',
    author: 'Martin Schmal',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Cat vs Dog',
    gameUrl: 'https://mngsebastian.github.io/Cat-vs-Dog/',
    gitHubUrl: 'https://github.com/mngsebastian',
    author: 'Sebastian Mosneagu',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'ABSea',
    gameUrl: 'https://elsafil.github.io/ABSea/',
    gitHubUrl: 'https://github.com/elsafil',
    author: 'Elsa Filippidou',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Duck Hunt',
    gameUrl: 'https://jfrank325.github.io/DuckHunt2020/',
    gitHubUrl: 'https://github.com/jfrank325',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Gluten Morgen',
    gameUrl: 'https://chenjacqueline.github.io/gluten-morgen/',
    gitHubUrl: 'https://github.com/chenjacqueline',
    author: 'Jacqueline Chen',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Underwater',
    gameUrl: 'https://vasilikibalidou.github.io/underwater-game/',
    gitHubUrl: 'https://github.com/vasilikibalidou',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Super Queen Trivia',
    gameUrl: 'https://lwrocks.github.io/super-queen-trivia/#quiz',
    gitHubUrl: 'https://github.com/lwrocks',
    author: 'Laurel Wright',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Plant It',
    gameUrl: 'https://jonathansaudhof.github.io/PlantIt/',
    gitHubUrl: 'https://github.com/jonathansaudhof',
    author: 'Jonathan Saudhof',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Matrix Man',
    gameUrl: 'https://ciwan-aram.github.io/matrixman/',
    gitHubUrl: 'https://github.com/ciwan',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Watercolor Bird',
    gameUrl: 'https://perdikal.github.io/Watercolor-bird/',
    gitHubUrl: 'https://github.com/perdikal',
    author: 'Alexis Perdikakis',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'The World is Yours',
    gameUrl: 'https://saekaisozumi.github.io/Project-1-The-Game/',
    gitHubUrl: 'https://github.com/saekaisozumi',
    author: 'Saeka Isozumi',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Super Hero Delivery',
    gameUrl: 'https://san4eto.github.io/ProjectW3/',
    gitHubUrl: 'https://github.com/san4eto',
    bootcamp: 'January/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Pokématch',
    gameUrl: 'https://steve-wright88.github.io/PokemonMemoryGame/',
    gitHubUrl: 'https://github.com/steve-wright88',
    author: 'Steve Wright',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Who said it?',
    gameUrl: 'https://nellycschneider.github.io/QuoteGame/index.html',
    gitHubUrl: 'https://github.com/nellycschneider',
    author: 'Nelly Schneider',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Peace Pal',
    gameUrl: 'https://keighleymcf.github.io/ironhack-game-project/',
    gitHubUrl: 'https://github.com/keighleymcf',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'DynaVent',
    gameUrl: 'https://alikucukavci.github.io/ventCalculator/',
    gitHubUrl: 'https://github.com/alikucukavci',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'The Heart of Nuna',
    gameUrl: 'https://makaveli1313.github.io/The-Hearth-Of-Nuna',
    gitHubUrl: 'https://github.com/makaveli1313',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Follow the Rythm!',
    gameUrl: 'https://tngu11.github.io/Handpan_Simulator/',
    gitHubUrl: 'https://github.com/tngu11',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Timetables Play',
    gameUrl: 'https://harinathvutla.github.io/TimeTables-Play/',
    gitHubUrl: 'https://github.com/harinathvutla',
    author: 'Harinath Vutla',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Vanish Game',
    gameUrl: 'https://annamarie-now.github.io/vanish-game',
    gitHubUrl: 'https://github.com/annamarie-now',
    author: 'Anna Marie',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Amazon Blue',
    gameUrl: 'https://noliko-zwa.github.io/amazon-blue/',
    gitHubUrl: 'https://github.com/noliko-zwa',
    author: 'noriko-Takizawa',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'PondDipping',
    gameUrl: 'https://sarahhouben.dev/PondDipping/',
    gitHubUrl: 'https://github.com/SarahHouben',
    author: 'Sarah Houben',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Ocean Cleanup',
    gameUrl: 'https://ninetteadhikari.github.io/oceancleanup',
    gitHubUrl: 'http://github.com/ninetteadhikari',
    author: 'Ninette Adhikari',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Know Your German Idioms',
    gameUrl: 'https://nunogervasio.github.io/IH-DOM-Project/',
    gitHubUrl: 'https://github.com/nunogervasio',
    author: 'Nuno Gervasio',
    bootcamp: 'May/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'TankFury',
    gameUrl: 'https://kiranshagoti.github.io/TankFury/',
    gitHubUrl: 'https://github.com/kiranshagoti',
    author: 'Kiran Mohan Shagoti',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'DinoGame',
    gameUrl: 'https://salwacynthia.github.io/DinoGame/',
    gitHubUrl: 'https://github.com/salwacynthia',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Casa de Los Bytes',
    gameUrl: 'https://itstheandre.github.io/Casa-de-los-bytes/',
    gitHubUrl: 'https://github.com/itstheandre',
    author: 'André de Albuquerque',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Tap Music',
    gameUrl: 'https://fonsogms.github.io/Piano-project',
    gitHubUrl: 'https://github.com/fonsogms',
    author: 'Alfonso García-Miñaur',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Google Predictions',
    gameUrl: 'https://janredmann.github.io/google-predictions/',
    gitHubUrl: 'https://github.com/janredmann',
    author: 'Jan Redmann',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Dytopia',
    gameUrl: 'https://marcoaccardi.github.io/IH-PROJECT-1-DYSTOPIA',
    gitHubUrl: 'https://github.com/marcoaccardi',
    author: 'Marco Accardi',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'DejaBu',
    gameUrl: 'https://KaterynaStadnyk.github.io/Ironhack_first_project_js-',
    gitHubUrl: 'https://github.com/katerynastadnyk',
    author: 'Kateryna Stadnychenko',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Puke',
    gameUrl: 'https://MoCode.github.io/puke-game',
    gitHubUrl: 'https://github.com/mocode',
    author: 'Moritz Wright',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'PopCorn Time',
    gameUrl: 'https://julferbas.github.io/popcorntime/',
    gitHubUrl: 'https://github.com/julferbas',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Connect4',
    gameUrl: 'https://javathis.github.io/Connect4/',
    gitHubUrl: 'https://github.com/javathis',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'The Beat Battle',
    gameUrl: 'https://iourisorokine.github.io/The-Beat-Battle/',
    gitHubUrl: 'https://github.com/iourisorokine',
    author: 'Iouri Sorokine',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Circle Slam Game',
    gameUrl: 'https://jrgsto.github.io/circle-slam-game/',
    gitHubUrl: 'https://github.com/jrgsto',
    bootcamp: 'August/2019',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'TuttiFrutti',
    gameUrl: 'https://agusgutierrezz.github.io/TuttiFrutti/',
    gitHubUrl: 'https://github.com/agusgutierrezz',
    author: 'Agustina Gutierrez',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Memory Game',
    gameUrl: 'https://alkico.github.io/memory-game/',
    gitHubUrl: 'https://github.com/alkico',
    author: 'Aleah',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'The Neverending Run',
    gameUrl: 'https://clarafmiranda.github.io/projectGame/',
    gitHubUrl: 'https://github.com/clarafmiranda',
    author: 'Clara Miranda',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Covid-19',
    gameUrl: 'https://jesuscabrera.github.io/game-ironhack-project-1/',
    gitHubUrl: 'https://github.com/jesuscabrera',
    author: 'Jesus Cabrera',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Gravity Runner',
    gameUrl: 'https://mtoscano91.github.io/Gravity-runner/',
    gitHubUrl: 'https://github.com/mtoscano91',
    author: 'Manuel Toscano',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Headbreak',
    gameUrl: 'https://mcfwesh.github.io/project-the-game/',
    gitHubUrl: 'https://github.com/mcfwesh',
    author: 'Nathan Ojieabu',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Override in Space',
    gameUrl: 'https://phpaul89.github.io/override-in-space/',
    gitHubUrl: 'https://github.com/phpaul89',
    author: 'Phillip Paul',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: '',
    gameUrl: 'https://heisemo.github.io/days-gone-by/',
    gitHubUrl: '',
    author: '',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Fathorn',
    gameUrl: 'https://sebastiannagl.github.io/fathorn/',
    gitHubUrl: 'https://github.com/sebastiannagl',
    author: 'Sebastian Nagl',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Days gone by',
    gameUrl: 'https://heisemo.github.io/days-gone-by/',
    gitHubUrl: 'https://github.com/heisemo',
    author: 'Timur James Tanurhan',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Mad Queen',
    gameUrl: 'https://yosrayousfi.github.io/MadQueen/',
    gitHubUrl: 'https://github.com/yosrayousfi',
    author: 'Yosra Yousfi',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Color Zen',
    gameUrl: 'https://olhadanylchenko.github.io/color_zen/',
    gitHubUrl: 'https://github.com/olhadanylchenko',
    author: 'Olha Danylchenko',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Trump Against the Wall',
    gameUrl: 'https://dionifss.github.io/trump-against-the-wall/',
    gitHubUrl: 'https://github.com/dionifss',
    author: 'Dionisio Ugalde',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Äpfel & Bananen',
    gameUrl: 'https://karlkristopher.github.io/apfel-bananen/',
    gitHubUrl: 'https://github.com/karlkristopher',
    author: 'Karl Kristopher',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Social Distancing',
    gameUrl: 'https://chantel-taki.github.io/Social-Distancing-Game/',
    gitHubUrl: 'https://github.com/chantel-taki',
    author: 'Chantel Taki',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Iron Game',
    gameUrl: 'https://ashabu.github.io/iron-game/',
    gitHubUrl: 'https://github.com/ashabu',
    author: 'Avtandil Ashabu',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,
  {
    title: 'Easter Corona',
    gameUrl: 'https://alba-tros.github.io/P5-Game-Easter-Corona/',
    gitHubUrl: 'https://github.com/alba-tros',
    author: 'Sami Benhassine',
    bootcamp: 'March/2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } ,


];

Game.insertMany(games)
  .then((data) => {
    console.log("Success");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
