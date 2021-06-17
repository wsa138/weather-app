async function getData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
  );
  const cityWeather = await response.json();
  console.log(cityWeather.main);
}

getData('London');
