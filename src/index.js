import './style.css';

// Get weather data and set variables to be used.
async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
    );
    const cityInfo = await response.json();
    console.log(cityInfo);
    const { temp, temp_max, temp_min, humidity } = cityInfo.main;
    const weatherDescription = cityInfo.weather[0].description;
    const { deg: windDirection, speed } = cityInfo.wind;
    return {
      temp,
      temp_max,
      temp_min,
      humidity,
      weatherDescription,
      windDirection,
      speed,
    };
  } catch (error) {
    console.log(error, 'There was an error getting the weather data');
  }
}

// Console logs the returned value from getData which right now is temp
getData('Eastchester').then((weatherInfo) => console.log(weatherInfo));
