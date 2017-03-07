console.log("test poop")

// var x = 5;
// div.innerHTML = x; (synchronous)

function executeThisCodeAfterFileLoaded() {
  console.log("IT WORKED!!")
}

function executeThisCodeAfterFileFails() {
  console.log("booooooooo")
}



var myRequest = new XMLHttpRequest(); //initiates new request
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded)
myRequest.addEventListener("error", executeThisCodeAfterFileFails)
myRequest.open("GET", "dinosaurs.json") //1st: what action you want to do, 2nd: where are you getting it from. linking json to js
myRequest.send(); //makes the request HAPPEN

console.log("myRequest", myRequest)