const fs = require("fs");
const { parse } = require("csv-parse");
// city is the variable that we use to serch in our DB, city is also the city that the user wants to check its weather 
var city;
var dict = {};
// request has the cordinates from the city 
var request = {};

// This function reads the csv and turns it into a dictionary
fs.createReadStream("./data/dataset1.csv")
.pipe(parse({ delimiter: ",", from_line: 2 }))
.on("data", function (row) {
  if (row[1] in dict){
        
  } else {
    var tmp = {"latitude":row[4], "longitude":row[5]}
    dict[row[1]] = tmp;
  }
  
  

  //console.log(row);
})
.on("error", function (error) {
  console.log(error.message);
})
.on("end", function () {
  //console.log("finished");
  console.log("City: " + city);

  request = {
    "latitude": dict[city]["latitude"],
    "longitude":dict[city]["longitude"]
  }

  //request is the petition with lon and lat
  console.log(request)
});