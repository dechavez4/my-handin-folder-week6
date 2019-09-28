import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes.js";



var site = "https://studypoints.info/jokes/api/jokes/period/hour";
fetch(site)
    .then(res => res.json())
    .then(data => {
        console.log("text", data);
        document.addEventListener("click", function () {
            //var dataString = JSON.stringify(data);
            document.getElementById("find2").innerHTML = data.joke;
        });
    });
