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
  return {
    temp,
    temp_max,
    temp_min,
    humidity,
    sunrise,
    sunset,
    timezone,
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

// Displays the information to the page.
function displayData(dataObj, location) {
  clearData();
  const dataContainer = document.getElementById('tempSection');

  // Display the submitted loation.
  const city = document.createElement('p');
  city.textContent = location;
  dataContainer.appendChild(city);

  // Loop through object keys and create a paragraph element,
  // append to displayData.
  Object.keys(dataObj).forEach((key) => {
    const newDataEle = document.createElement('p');
    newDataEle.textContent = `${key}: ${dataObj[key]}`;
    dataContainer.appendChild(newDataEle);
  });
}

// Runs app which takes input, gets data and display data to page.
async function runApp() {
  const location = document.getElementById('locationInput').value;
  const weatherData = await getWeather(getData(location));
  convertValues(weatherData);
  displayData(weatherData, location);
}

// Event listener for location input search.
document.getElementById('locationSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  runApp();
});

// TODO: A function that converts object values to appropriate types.
function convertValues(obj) {
  console.log(obj);
  convertWind(obj);
}

// Convert wind direction
function convertWind(obj) {
  const windDirection = obj.deg;
  if (windDirection > 349 || windDirection <= 11) {
    console.log('N');
  } else if (windDirection > 11 && windDirection <= 34) {
    console.log('NNE');
  } else if (windDirection > 34 && windDirection <= 56) {
    console.log('NE');
  } else if (windDirection > 56 && windDirection <= 80) {
    console.log('ENE');
  } else if (windDirection > 80 && windDirection <= 101) {
    console.log('E');
  } else if (windDirection > 101 && windDirection <= 124) {
    console.log('ESE');
  } else if (windDirection > 124 && windDirection <= 146) {
    console.log('SE');
  } else if (windDirection > 146 && windDirection <= 169) {
    console.log('SSE');
  } else if (windDirection > 169 && windDirection <= 191) {
    console.log('S');
  } else if (windDirection > 191 && windDirection <= 214) {
    console.log('SSW');
  } else if (windDirection > 214 && windDirection <= 236) {
    console.log('SW');
  } else if (windDirection > 236 && windDirection <= 259) {
    console.log('WSW');
  } else if (windDirection > 259 && windDirection <= 281) {
    console.log('W');
  } else if (windDirection > 281 && windDirection <= 304) {
    console.log('WNW');
  } else if (windDirection > 304 && windDirection <= 326) {
    console.log('NW');
  } else if (windDirection > 326 && windDirection <= 349) {
    console.log('NNW');
  } else {
    console.log('N/A');
  }
}
