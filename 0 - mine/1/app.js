function printWeatherInfo(data) {
  document.querySelector(".show-weather").innerHTML = `
  <ul>
    <li>city name: ${data.name}</li>
    <li>weather: ${data.weather[0].main}</li>
    <li>current temp: ${data.main.temp}</li>
    <li>temp max: ${data.main.temp_max}</li>
    <li>temp min: ${data.main.temp_min}</li>
  </ul>
`;
}

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=b3b2a40c3e5f4ba1ed64f02c07030015&units=metric";
const w = new Weather();

w.getWeather(url) //
  .then((res) => {
    console.log(res);
    printWeatherInfo(res);
  })
  .catch((err) => console.log(err));
