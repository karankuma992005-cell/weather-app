const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3c7b8ba484msh51d61e242a95c27p1a4f8bjsnad011a8db49e',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
async function getWeather(cityName) {

	const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=' + cityName;

	try {
		const response = await fetch(url, options);
		const result = await response.json(); // parse JSON
		document.getElementById("city").innerHTML = result.name + "";
		document.getElementById("temp").innerHTML = (result.main.temp - 273.15).toFixed(1) + "°C";
		document.getElementById("feels_like").innerHTML = (result.main.feels_like - 273.15).toFixed(1) + "°C";
		document.getElementById("temp_min").innerHTML = (result.main.temp_min - 273.15).toFixed(1) + "°C";
		document.getElementById("temp_max").innerHTML = (result.main.temp_max - 273.15).toFixed(1) + "°C";
		document.getElementById("pressure").innerHTML = result.main.pressure + " hPa";
		document.getElementById("humidity").innerHTML = result.main.humidity + " %";
		document.getElementById("sea_level").innerHTML = result.main.sea_level;
		document.getElementById("grnd_level").innerHTML = result.main.grnd_level;
		console.log(result);
	} catch (error) {
		console.error("Error fetching weather:", error);
	}
}
const cityInput = document.getElementById("cityName");
const searchBtn = document.getElementById("searchBtn");
const reset = document.getElementById("reset");


searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(cityName.value); // input ka value pass karo
	cityName.value = "";
})
getWeather("Delhi");

reset.addEventListener("click", () => {
  cityInput.value = "";
  getWeather("Delhi");
});
	








