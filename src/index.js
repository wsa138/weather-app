import './style.css';

// Make fetch request for city info and return json object.
async function getData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=149ffce1bb4cd39b05ac9f60cbf67c14`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error, 'There was an error getting the weather info');
  }
}

// Return weather info as object.
async function getWeather(weatherObj) {
  const {
    main: { temp },
    main: { temp_max },
    main: { temp_min },
    main: { humidity },
    sys: { sunrise },
    sys: { sunset },
    timezone,
    weather: {
      [0]: { description },
    },
    weather: {
      [0]: { main },
    },
    wind: { speed },
    wind: { deg },
  } = await weatherObj;
  return deg;
}

async function runApp() {
  const result = await getWeather(getData('London'));
  console.log(result);
}

runApp();
