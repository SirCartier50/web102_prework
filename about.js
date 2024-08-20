import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');

const game = GAMES_JSON.find(item => {return item.name == value})

document.getElementsByClassName("header-text")[0].innerHTML = game.name;
document.getElementById("display").setAttribute("src", game.img)
document.getElementById("display").setAttribute("width", "40%")
document.getElementById("about").innerHTML = `<h2>About</h2><p>description:${game.description}</p><p>pledged:${game.pledged}</p><p>goal:${game.goal}</p><p>backers:${game.backers}</p>`