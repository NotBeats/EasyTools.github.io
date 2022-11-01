// gets new request
const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;


function main() {
	// api url
	var inputText = document.querySelector('input');
	let text = inputText.value.trim();
    xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + text);
    xhr.setRequestHeader("X-RapidAPI-Key", "9cf57b32b1msh611d6fc2a91bb2ap1cbe3fjsn92a34b8277ae");
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

    xhr.send(data);
    xhr.onreadystatechange = search;
}

function search() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		var str = xhr.responseText; 
		var obj = JSON.parse(str); // json object

		// vars for the info
		var city = document.getElementById("city");
        var region = document.getElementById("region");
        var country = document.getElementById("country");
		var weather = document.getElementById("current_weather");
		var temp = document.getElementById("current_temp");
		var feel = document.getElementById("feel_temp");
        var humidity = document.getElementById("humidity");
        var wind = document.getElementById("wind");

		// sets the text to the info
		city.innerHTML = (obj.location.name);
		region.innerHTML = (obj.location.region);
		country.innerHTML = (obj.location.country);
		weather.innerHTML = (obj.current.condition.text);
        temp.innerHTML = (obj.current.temp_f + "°F");
        feel.innerHTML = (obj.current.feelslike_f + "°F");
        humidity.innerHTML = (obj.current.humidity + "%");
        wind.innerHTML = (obj.current.wind_mph + " MPH");
	}
} 

// displays the weather info 
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