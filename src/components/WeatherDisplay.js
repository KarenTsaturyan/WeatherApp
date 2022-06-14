import React from "react";

function WeatherDisplay(props) {
  return(
    <form onSubmit={props.method}>
      <input type="text" name="city" placeholder="city" />
      <button className="btn">Get city</button>
    </form>
  );
}
export default WeatherDisplay;
