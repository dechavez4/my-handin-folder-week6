import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes.js";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

//--------------------------getJokeById------------------------------------
function getJokeById(id) {
    const JokesByid = jokes.getJokeById(id);
    document.getElementById("showJoke").innerHTML = JokesByid;
}

var idtext = document.getElementById("valueID");
var button1 = document.getElementById("findById");
button1.onclick = function () {
    getJokeById(idtext.value);
}


//-------------------------------addJoke-------------------------------------

function addJoke(joke) {
    const addjoke = jokes.addJoke(joke);
    const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");

}

var addJokeText = document.getElementsByName("addjokeText");
var button2 = document.getElementById("addJoke");
button2.onclick = function () {
    addJoke(addJokeText);
}


//--------------------------------DeleteJoke------------------------------------
function deleteJoke(id){
    const delJoke = jokes.getJokeById(id);
    delete delJoke;
}
var removeJoke = document.getElementById(deleteJokeID);
var button3 = document.getElementById(dJoke);
button3.onclick = function(){
    deleteJoke(removeJoke.value);
}
