// gets new request
const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;


function main() {
	// api url
	var inputText = document.querySelector('input');
	let text = inputText.value.trim();
	xhr.open("GET", "https://rawg-video-games-database.p.rapidapi.com/games/"+ text + "?key=904b4d1767c0434eae179bed17280ca9");
	xhr.setRequestHeader("X-RapidAPI-Key", "9cf57b32b1msh611d6fc2a91bb2ap1cbe3fjsn92a34b8277ae");
	xhr.setRequestHeader("X-RapidAPI-Host", "rawg-video-games-database.p.rapidapi.com");

	// sends request and returns data
	xhr.send(data);
	xhr.onreadystatechange = search;
}

function search() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		var str = xhr.responseText; 
		var obj = JSON.parse(str); // json object

		// vars for the info
		var name = document.getElementById("game-name");
		var date = document.getElementById("game-date");
		var rating = document.getElementById("game-rating");
		var desc = document.getElementById("game-desc");

		// sets the text to the info
		name.innerHTML = (obj.name);
		date.innerHTML = (obj.released);
		rating.innerHTML = (obj.rating);
		desc.innerHTML = (obj.description_raw);

		// if a new game isn't rated then says no rated yet
		// if a game doesn't exist in the database then says not found
		if (rating.innerHTML === '0') {
			rating.innerHTML = "Not rated yet";
		} else if (name.innerHTML === 'undefined') {
			name.innerHTML = "Game not found";
			date.innerHTML = "Release date not available";
			rating.innerHTML = "No rating available";
			desc.innerHTML = "No description available";
		}
	}
} 

// displays the game info 
function display() {
	var searchBtn = document.getElementById("searchBtn");
	if (searchBtn.addEventListener) {
		searchBtn.addEventListener("click", main, false);
	} else if (searchBtn.attachEvent) {
		searchBtn.attachEvent("onclick", main);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", display, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", display);
}