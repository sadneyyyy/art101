/*
* author: Sidney Flores
* Created: Februrary 8
* Class: Art 101
* Assigment: Lab 8
*/

function firstThing(test) {
  console.log(test + ":this is the first thingy.<br>")
}

function secondThing(test) {
  console.log(test + ":this is the second thingy.<br>")
}
function thirdThing(test) {
  console.log(test + ":this is the third thingy.<br>")
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//test 2 - in order
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function(){
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//test 3- in the order 2,3,1
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
