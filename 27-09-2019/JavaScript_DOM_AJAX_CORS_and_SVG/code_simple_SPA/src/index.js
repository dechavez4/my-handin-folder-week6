import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
var country;
var precountry;
window.onload = function () {
    document.querySelector("#svg2").addEventListener("click", getFunc);

    function getFunc(e) {
        if (precountry != null)
            document.getElementById(precountry).style.fill = "c0c0c0";

        country = event.target.id;
        document.getElementById(country).style.fill = "red";

        precountry = country;
        fetch("http://restcountries.eu/rest/v1/alpha?codes=" + e.target.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let newArr = [];
                newArr.push("<p>Country: <b>" + data[0].name + "</b></p>");
                newArr.push("<p>Population: <b>" + data[0].population + "</b></p>");
                newArr.push("<p>Area : <b>" + data[0].area + "</b></p>");
                newArr.push("<p>Borders: <b>" + data[0].borders + "</b></p>");
                document.querySelector("#info").innerHTML = newArr.join("");
                document.getElementById(e.target.id);
            });
    }
}
