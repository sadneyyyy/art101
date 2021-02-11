/*
* author: Sidney Flores
* Created: Februrary 1
* Class: Art 101
* Assigment: Lab 6
*/

//Declare Variables from task 1

var myTransport = ["car","bus", "walking"] ;

var myMainRide = {make: "ram",
                  model: "dodge",
                  color: "black",
                  year: 1998,
                  age: function () {
                    return 1998 - this.year;
  }
};

//output

// document.writeln("my wheels" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
