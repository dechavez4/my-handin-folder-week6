//The Magic of callbacks:
//1) Using existing functions that takes a callback as an argument. 
//Using the filter method
var Arr = [
    "Lars",
    "Jan",
    "Peter",
    "Bo",
    "Frederik"
];
var filterList = (letters) => {
    return Arr.filter(name => name.indexOf(letters) > -1);
};
console.log(Arr, filterList('a'));
//Using the Map method
var reversedList = Arr.map(function repeatList(Arr) {
    return Arr;
}).reverse();
console.log(Arr, reversedList);
//4) Getting really comfortable with filter and map
//a)
var numbers = [1, 3, 5, 10, 11];

function sumNum(a, b) {
    return a + b;
}

function addNextNum(num, callback) {
    addnumbers = [];
    for (var i = 0; i < num.length; i++) {
        if (i != num.length - 1) {
            addnumbers.push(callback(num[i], num[i + 1]));
        } else {
            addnumbers.push(num[i]);
        }
        return addnumbers;
    }
}
console.log(addNextNum(numbers, sumNum));

//b) Use map() to create to create the <a>’s for a navigation set and eventually a string like below
//(use join() to get the string of <a>’s):
var rows = Arr.map(function (member) {
    return "<nav>" +
        "<a href=''>" + member + "</a>";
}).join("") + "</nav>";
document.getElementById("showMembers").innerHTML = rows;
//c)
var names = [
    { name: "Lars", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Bo", phone: "79345" }
];
var table = names.map(function (person) {
    return "<tr>" +
        "<td>" + person.name + "</td>" +
        "<td>" + person.phone + "</td>" +
        "</tr>";
}).join("");
document.getElementById("showNames").innerHTML = table;

//d)
//function contains(names, letter) {
  //  for (var i = 0; i < names.length; i++) {
    //    if (names[i] === letter) {
      //      var tableName = names.map(function (person) {
        //        return "<tr>" +
          //          "<td>" + person.name + "</td>" +
            //        "<td>" + person.phone + "</td>" +
              //      "</tr>";
            //}).join("");
        //} else {
          //  var tableName = names.map(function (person) {
            //    return "<tr>" +
              //      "<td>" + person.name + "</td>" +
                //    "<td>" + person.phone + "</td>" +
                 //   "</tr>";
            //}).join("");
        //}

    //}
//}
//console.log(contains(names, "a"));

// opgave reduce
// a
var all = ["Lars", "Peter", "Jan", "Bo"];
var stringName = all.map(function (person) {
    return all.reduce((x, y) => x + ", " + y);
}).join(" ");

console.log(stringName);

//b
var numbers = [2, 3, 67, 33];
let sum = numbers.reduce((acc, val) => {
    return acc + val;
});

console.log(sum, numbers);

