// define several functions
function firstFunction() {
//	alert("second function");
    secondFunction();
}
function secondFunction() {
   //      alert("third function");
   thirdFunction();
}
function thirdFunction() {
	// alert("fourth function");
    fourthFunction();
}
function fourthFunction() {
//      alert("about to change headline");
//
    headline.innerHTML = "You clicked the headline!";
}

// grab the headline element
var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {
   alert("first function");
   firstFunction();
};





