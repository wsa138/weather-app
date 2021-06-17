async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
    );
    const cityWeather = await response.json();
    console.log(cityWeather.main);
  } catch (error) {
    console.log(error, 'There was an error getting the weather data');
  }
}

getData('London');
