// Add your WeatherAPI key here
const apiKey = 'e0768f4f2dea4342801212630242109';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherIcon = document.getElementById('weatherIcon');
const weatherDescription = document.getElementById('weatherDescription');

// Fetch weather data from WeatherAPI
const getWeather = async (city) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
  const data = await response.json();
  
  if (response.ok) {
    displayWeather(data);
  } else {
    cityName.textContent = "City not found";
    temperature.textContent = "";
    weatherIcon.src = "";
    weatherDescription.textContent = "";
  }
};

// Display weather data from WeatherAPI
const displayWeather = (data) => {
  cityName.textContent = data.location.name;
  temperature.textContent = `${data.current.temp_c}°C`;
  weatherIcon.src = `https:${data.current.condition.icon}`;
  weatherDescription.textContent = data.current.condition.text;
};

// Event listener for search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});
