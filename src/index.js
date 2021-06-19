import './style.css';

// Make fetch request for city info and return json object.
async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
    );
    const responseConverted = await response.json();
    return responseConverted;
  } catch (error) {
    console.log(error, 'There was an error getting the weather info');
  }
}

// Return weather info as object.
async function getWeather(obj) {
  const data = await obj;
  console.log(data.main.temp);
}

getWeather(getData('London'));
