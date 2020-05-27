var css = document.querySelector(".code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var direction = document.querySelector(".direction");
var body = document.getElementById("gradient");
var code = document.querySelector(".code");
var copyBtn = document.querySelector("button");
var c1 = document.querySelector(".c1-code");
var c2 = document.querySelector(".c2-code");
	

function setGradient() {
	c1.innerHTML = color1.value
	c2.innerHTML = color2.value
	body.style.background = 
	"linear-gradient(to " + direction.value + ","  
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.value = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("change", setGradient);
copyBtn.addEventListener("click", copytoClipboard);


function copytoClipboard() {
	try{
		var textBox = document.querySelector("#code");
		textBox.select();
		document.execCommand("copy");
		alert("Copied to clipboard!")
	}
	catch(err){
		console.log(err)
	}
}