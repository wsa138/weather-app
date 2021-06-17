import './style.css';

async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
    );
    const cityInfo = await response.json();
    const cityWeather = cityInfo.main;
    console.log(
      `Current Temp: ${cityWeather.temp}, High: ${cityWeather.temp_max}, Low: ${cityWeather.temp_min}`
    );
  } catch (error) {
    console.log(error, 'There was an error getting the weather data');
  }
}

getData('Eastchester');
