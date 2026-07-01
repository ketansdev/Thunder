const button = document.querySelector("button");
const iconContainer = document.getElementById("iconContainer");
const temperatureLocation = document.getElementById("temperatureLocation");
const temperatureInfo = document.getElementById("temperatureInfo");
const timeInfo = document.getElementById("timeInfo");
const weatherInfo = document.getElementById("weatherInfo");
const defaultText = document.getElementById("defaultText");

function resetDeafult() {
  iconContainer.textContent = "";
  temperatureLocation.textContent = "";
  temperatureInfo.textContent = "";
  timeInfo.textContent = "";
}

async function fetchWeatherInfo(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=6f4e3386f68a42589fb115335262506&q=${city}&aqi=no`,
  );
  const data = await response.json();
  console.log(data);

  resetDeafult();
  weatherInfo.style.display = "inline-block";
  timeInfo.style.display = "inline-block";
  weatherInfo.style.display = "flex";
  timeInfo.style.display = "flex";
  defaultText.style.display = "none";

  const icon = document.createElement("img");
  icon.src = data.current.condition.icon;

  const temperature = document.createElement("h1");
  temperature.innerHTML = `${data.current.temp_c} <span id="deg_c">°c </span>`;

  const weatherText = document.createElement("p");
  weatherText.classList.add("weatherText");
  weatherText.textContent = data.current.condition.text;

  const location = document.createElement("p");
  location.classList.add("location");
  location.innerHTML = `<i class="ri-map-pin-line"></i> ${data.location.name}, ${data.location.country}`;

  iconContainer.append(icon);
  temperatureLocation.append(temperature, weatherText, location);

  // temp extra info

  const tempExtra = document.createElement("div");
  tempExtra.classList.add("tempExtra");

  const feelsLike = document.createElement("div");
  feelsLike.innerHTML = `<span><i class="ri-temp-cold-line"></i></span>
                        <p>Feels Like</p>
                        <span>${data.current.feelslike_c}°c</span>`;

  const humidity = document.createElement("div");
  humidity.innerHTML = `<span><i class="ri-water-percent-line"></i></span>
                        <p>Humidity</p>
                        <span>${data.current.humidity}%</span>`;

  const wind = document.createElement("div");
  wind.innerHTML = `<span><i class="ri-windy-line"></i></span>
                        <p>Wind</p>
                        <span>${data.current.wind_kph}km/h</span>`;

  const pressure = document.createElement("div");
  pressure.innerHTML = `<span><i class="ri-dashboard-3-line"></i></span>
                        <p>Pressure</p>
                        <span>${data.current.pressure_mb}hPa</span>`;

  tempExtra.append(feelsLike, humidity, wind, pressure);
  temperatureInfo.append(tempExtra);

  //   time info

  const calender = document.createElement("div");
  calender.classList.add("calenderIcon");
  calender.innerHTML = `<i class="ri-calendar-line"></i>`;

  const date = document.createElement("p");
  date.classList.add("dateText");
  const time = document.createElement("p");
  time.classList.add("timeText");
  const today = new Date(data.location.localtime);
  console.log(today);
  date.textContent = today.toDateString();
  time.innerHTML = `<i class="ri-time-line"></i> ${today.toLocaleTimeString()}`;

  timeInfo.append(calender, date, time);
}

button.addEventListener("click", () => {
  const input = document.querySelector("input");
  const city = input.value;

  if(city === "") return

  fetchWeatherInfo(city);
});
