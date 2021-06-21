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

// Displays the information to the page.
function displayData(dataObj, location) {
  clearData();
  const dataContainer = document.getElementById('allInfo');

  // Display the submitted loation.
  const city = document.createElement('p');
  city.textContent = location;
  dataContainer.appendChild(city);

  // Loop through object keys and create a paragraph element,
  // append to displayData.
  Object.keys(dataObj).forEach((key) => {
    const newDataEle = document.createElement('p');
    newDataEle.textContent = `${key}: ${dataObj[key]}///`;
    dataContainer.appendChild(newDataEle);
  });
}

function clearData() {
  const dataContainer = document.getElementById('allInfo');
  dataContainer.textContent = '';
}

// Runs app which takes input, gets data and display data to page.
async function runApp() {
  const location = document.getElementById('locationInput').value;
  const weatherData = await getWeather(getData(location));
  displayData(weatherData, location);
}

// Event listener for location input search.
document.getElementById('locationSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  runApp();
});
