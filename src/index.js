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
    return console.log(error, 'There was an error getting the weather info');
  }
}

// Return necessary weather info as a new object.
async function getWeather(weatherObj) {
  const {
    main: { temp },
    main: { temp_max },
    main: { temp_min },
    main: { humidity },
    sys: { sunrise },
    sys: { sunset },
    weather: {
      0: { description },
    },
    weather: {
      0: { main },
    },
    wind: { speed },
    wind: { deg },
  } = await weatherObj;
  return {
    temp,
    temp_max,
    temp_min,
    humidity,
    sunrise,
    sunset,
    description,
    main,
    speed,
    deg,
  };
}

// Clear weather info text content from the page.
function clearData() {
  const dataContainer = document.getElementById('tempSection');
  dataContainer.textContent = '';
}

// Event listener for location input search.
document.getElementById('locationSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  runApp();
});

// Converts object values to appropriate types.
function convertValues(obj) {
  return { wind: convertWind(obj), sun: convertSun(obj) };
}

// Convert wind direction
function convertWind(obj) {
  const windDirection = obj.deg;
  if (windDirection > 349 || windDirection <= 11) {
    return 'N';
  }
  if (windDirection > 11 && windDirection <= 34) {
    return 'NNE';
  }
  if (windDirection > 34 && windDirection <= 56) {
    return 'NE';
  }
  if (windDirection > 56 && windDirection <= 80) {
    return 'ENE';
  }
  if (windDirection > 80 && windDirection <= 101) {
    return 'E';
  }
  if (windDirection > 101 && windDirection <= 124) {
    return 'ESE';
  }
  if (windDirection > 124 && windDirection <= 146) {
    return 'SE';
  }
  if (windDirection > 146 && windDirection <= 169) {
    return 'SSE';
  }
  if (windDirection > 169 && windDirection <= 191) {
    return 'S';
  }
  if (windDirection > 191 && windDirection <= 214) {
    return 'SSW';
  }
  if (windDirection > 214 && windDirection <= 236) {
    return 'SW';
  }
  if (windDirection > 236 && windDirection <= 259) {
    return 'WSW';
  }
  if (windDirection > 259 && windDirection <= 281) {
    return 'W';
  }
  if (windDirection > 281 && windDirection <= 304) {
    return 'WNW';
  }
  if (windDirection > 304 && windDirection <= 326) {
    return 'NW';
  }
  if (windDirection > 326 && windDirection <= 349) {
    return 'NNW';
  }
  return 'N/A';
}

// Convert the sunrise and sunset times.
function convertSun(obj) {
  const sunsetOld = new Date(obj.sunset * 1000);
  const sunriseOld = new Date(obj.sunrise * 1000);

  // Converted sunset
  const sunsetNew = `${convertMilitary(
    sunsetOld.getHours()
  )}:${sunsetOld.getMinutes()}:${sunsetOld.getSeconds()}`;

  // Converted sunrise
  const sunriseNew = `${convertMilitary(
    sunriseOld.getHours()
  )}:${sunriseOld.getMinutes()}:${sunriseOld.getSeconds()}`;

  const sun = { sunrise: sunriseNew, sunset: sunsetNew };
  return sun;
}

// Convert military time hours to standard.
function convertMilitary(hour) {
  if (hour > 12) {
    return hour - 12;
  }
  return hour;
}

// Takes original weather data and converted data and
// creates a new object with necessary properties.
function updateWeatherData(original, converted) {
  const updatedData = { ...original, ...converted };
  const date = new Date();
  updatedData['date'] = date.toDateString();
  delete updatedData.deg;
  delete updatedData.sunrise;
  delete updatedData.sunset;
  return updatedData;
}

// Runs app which takes input, gets data and display data to page.
async function runApp() {
  const location = document.getElementById('locationInput').value;
  const weatherData = await getWeather(getData(location));
  const convertedWeather = convertValues(weatherData);
  const newWeatherData = updateWeatherData(weatherData, convertedWeather);
  displayData(newWeatherData, location);
}

// Displays the information to the page.
function displayData(dataObj, location) {
  clearData();
  console.log(dataObj);

  // DOM elements.
  const date = document.getElementById('dateText');
  const description = document.getElementById('descriptionText');

  // Replace text content
  replaceElementValues(date, dataObj.date);
  replaceElementValues(description, dataObj.description);
}

// Replace the text content of element with the provided value.
function replaceElementValues(ele, val) {
  ele.textContent = val;
}
