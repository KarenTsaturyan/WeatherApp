import React from "react";

function AboutWeather(props) {
  return(
    <div>
      <p> City: {props.city} </p>
      <p> Country : {props.country} </p>
      <p> Temp: {props.temp} </p>
      <p> FeelsLike: {props.feelsLike} </p>
      <p> Sunset: {props.sunset} </p>
      <p> Weather: {props.weather}  </p>
    </div>
  );
}
export default AboutWeather;
