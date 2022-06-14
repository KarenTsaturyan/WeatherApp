import React, { useState }  from 'react';
import './styles/App.css';
import WeatherDisplay from './components/WeatherDisplay';
import AboutWeather from './components/AboutWeather';

const API = "166d6b4dbe6e08a08eebbd7622840d77";//API key

function App() {
  const [temp,setTemp] = useState(undefined);//Temperature
  const [feelsLike,setFeelsLike] = useState(undefined);//feeling of temp
  const [city,setCity] = useState(undefined);//City Name
  const [country,setCountry] = useState(undefined);//Country Name
  const [weather,setWeather] = useState(undefined);//ex Clouds
  const [sunset,setSunset] = useState(undefined);//time of Sunset
  const [icon,setIcon] = useState('03d');

  async function getWeather(e){//working asyncrone with the server(http request).
     e.preventDefault();//There wont be a restart of the page.
     let citySearch = e.target.elements.city.value;

    if(citySearch !== "") {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API}&units=metric`);//get data
      const data = await api_url.json();//Wait and then translate data to json.
    if(data.message !== "city not found"){
      let sunset = data.sys.sunset;//Sunset time is given in miliseconds, thats why we use setTime()
      let date = new Date();
      date.setTime(sunset);
      let sunsetToHours = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setWeather(data.weather.[0].main);
      setSunset(sunsetToHours);
      setFeelsLike(data.main.feels_like);
      setIcon(data.weather.[0].icon);
    }
    
  }
}
  return (
    <div className="wrapper">
      <div className="main">
         <div className="info">
            <img alt="img's not defined" src={`http://openweathermap.org/img/wn/${icon}.png`} />
              <h2>Weather in your city</h2>
              <div className="about">
        <WeatherDisplay method={getWeather}/>
        <AboutWeather temp={temp} city={city}   country={country} weather={weather}   sunset={sunset} feelsLike={feelsLike}/>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;
