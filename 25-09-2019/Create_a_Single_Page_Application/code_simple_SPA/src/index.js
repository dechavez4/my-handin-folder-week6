import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
//bruges til at udskrive alle users
var user = "http://localhost:3333/api/users";
fetch(user)
    .then(res => res.json())
    .then(data => {
        let table = data.map(function (user) {
            return "<tr>" +
                "<td>" + user.id + "</td>" +
                "<td>" + user.age + "</td>" +
                "<td>" + user.name + "<td>" +
                "<td>" + user.gender + "</td>" +
                "<td>" + user.email + "</td>";
        }).join("");
        document.getElementById("users").innerHTML = table;
    });

//bruges til at udskrive en user udfra hvilket id man søger efter
function getUserById(id) {
    fetch(user)
        .then(res => res.json())
        .then(data => {
            let users = data.filter(function (user) {
                return (user.id == id)

            });
            document.getElementById("user").innerHTML = 
            "<tr><td>" + users[0].id + "</td><td>" + users[0].age + "</td><td>" + users[0].name + 
            "</td><td>" + users[0].gender + "</td><td>" + users[0].email + "</td></tr>";
        })
};

var idVal = document.getElementById("getId");
var userBtn = document.getElementById("findUserId");

userBtn.onclick = function () {
    getUserById(idVal.value);
}

//bruges til at udskrive en user udfra id
function deleteUserById(id){
    fetch(user)
    .then(res => res.json())
    .then(data => {
        let users = data.filter(function(user){
            return users
        })
    ;}
}