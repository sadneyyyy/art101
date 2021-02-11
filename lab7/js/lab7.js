/*
* author: Sidney Flores
* Created: Februrary 3
* Class: Art 101
* Assigment: Lab 7
*/

function intakeAndSort() {
  //sorts letters of the name
  var userName = window.prompt("Hi. Please tell me your name.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Output
document.writeln("ive fixed your name: ", intakeAndSort(), "<br>");
