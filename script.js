const API_KEY = "cb739147247021863bc1f8c2d917769c";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const error = document.getElementById("error");
  error.innerText = "";

  if (city === "") {
    error.innerText = "Please enter a city name";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText =
      `🌡️ Temperature: ${data.main.temp} °C`;
    document.getElementById("condition").innerText =
      `☁️ Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText =
      `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText =
      `🌬️ Wind Speed: ${data.wind.speed} m/s`;

  } catch (err) {
    error.innerText = err.message;
  }
}
