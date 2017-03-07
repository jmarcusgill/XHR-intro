console.log("First line in js file", Date.now());
// var x = 5;
// div.innerHTML = x; (synchronous)

var dinoContainer = document.getElementById("dinoContainer");

function makeDom(xhrData) {
var dinosaurString = "";
var currentDinosaur;
  for (var i = 0; i < xhrData.dinosaurs.length; i++) {
    currentDinosaur = xhrData.dinosaurs[i];

    dinosaurString += `<div class="col-sm-6 col-md-4">`;
    dinosaurString += `<div class="thumbnail">`;
    dinosaurString += `<img src="${currentDinosaur.url}" alt="dino">`;
    dinosaurString += `<div class="caption">`;
    dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
    dinosaurString += `<p>Is a: ${currentDinosaur.type}</p>`;
    dinosaurString += `<p>Likes to eat: ${currentDinosaur.food}</p>`;
    dinosaurString += `</div>`;
    dinosaurString += `</div>`;
    dinosaurString += `</div>`;



  dinoContainer.innerHTML = dinosaurString;

  }
}


function executeThisCodeAfterFileLoaded() {
  // console.log("IT WORKED!!", this.responseText) //The JSON comes back as a string
  console.log("Date Returned succesfully", Date.now());

  var data = JSON.parse(this.responseText); //Turns string into json file
  // console.log("it really worked", data);
  makeDom(data);
}

function executeThisCodeAfterFileFails() {
  // console.log("booooooooo")
}



var myRequest = new XMLHttpRequest(); //initiates new request
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded)
myRequest.addEventListener("error", executeThisCodeAfterFileFails)
myRequest.open("GET", "dinosaurs.json") //1st: what action you want to do, 2nd: where are you getting it from. linking json to js
myRequest.send(); //makes the request HAPPEN

// console.log("myRequest", myRequest)


console.log("Last line in js file", Date.now());
