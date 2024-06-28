// select all of the HTML elements that will need to be manipulated and assign them to const variables
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const wSpeed= document.querySelector('#wSpeed');
const windchill = document.querySelector('#windchill');
const nullstr= "Not Applicable";
 
 
//API call
const url = 'https://api.openweathermap.org/data/2.5/weather?lat={42.04992}&lon={-71.54694}&appid={62eb610d2fafaf63e536973054062c95}';
// Lat(42.04992), Long(-71.54694)
 
//asynchronous function named "apiFetch()" that uses a try block to handle errors
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
 
//output to the given HTML document
function displayResults(data) {
    //current temp
    let numData = `${data.main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    currentTemp.textContent = numDecimals + '°F';
    //description
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    //wind speed
    let wind = data.wind.speed;
    wSpeed.textContent = 'Wind Speed: ' + wind + 'mph';
    //windchill
      if ((currentTemp<=50)&(wSpeed>=3)) {
        var wChill= Math.round(35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*currentTemp*Math.pow(wSpeed,0.16));
        windchill.textContent = "Wind Chill: " + wChill;
      } else {
        windchill.textContent = "Wind Chill: " + nullstr;
      }
}
 
apiFetch();