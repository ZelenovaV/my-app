import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDescription(`Description:${response.data.weather[0].description}`);
    setHumidity(`Humidity:${response.data.main.humidity} %`);
    setWind(`Wind:${response.data.wind.speed} km/h`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "840cae4b192e01b195c079d7573fc04f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        <li>{temperature}</li>
        <li>{description}</li>
        <li>{humidity}</li>
        <li>{wind}</li>
        <li>
          {" "}
          <img src={icon} alt={description} />
        </li>
      </ul>
    </div>
  );
}
