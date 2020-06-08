(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var css = document.querySelector(".code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var direction = document.querySelector(".direction");
var body = document.getElementById("gradient");
var code = document.querySelector(".code");
var copyBtn = document.querySelector("button");
var c1 = document.querySelector(".c1-code");
var c2 = document.querySelector(".c2-code");
var c3 = document.querySelector(".c3-code");

function setGradient() {
	c1.innerHTML = color1.value
	c2.innerHTML = color2.value
	c3.innerHTML = color3.value
	body.style.background = 
	"linear-gradient(to " + direction.value + ","  
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", " 
	+ color3.value 
	+ ")";

	css.value = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
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
},{}]},{},[1]);
