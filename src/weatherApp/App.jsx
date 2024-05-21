import { useState } from 'react'

// import '../css/App.css';
import Layout from '../Layouts/App';

const api = {
  key: "65eedf923fe1f2ac5048b9329865046b",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  // const [count, setCount] = useState(0)
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
   const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
           .then(res => res.json())
           .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
            })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  // Fonction pour obtenir le nom de la classe CSS de la vidéo en fonction des conditions météorologiques
  const getVideoBackgroundClass = () => {
    if(typeof weather.main != "undefined"){
      switch (weather.weather[0].main) {
        case "Clear":
          return "clear";
        case "Clouds":
          return "clouds";
        case "Rain":
          return "rain";
        case "Drizzle":
          return "drizzle";
        case "Thunderstorm":
          return "thunderstorm";
        case "Snow":
          return "snow";
        case "Mist":
          return "mist";
        case "Smoke":
          return "smoke";
        case "Haze":
          return "haze";
        case "Dust":
          return "dust";
         case "Wind":
          return "wind";
        case "Fog":
          return "fog";
        case "Storm":
          return "storm";
        case "Rainbow":
          return "rainbow";
        case "Sun":
          return "sun";
          case "Sunny clouds":
            return "sun-clouds";
        default:
          return ""; // Ajoutez ici les conditions pour d'autres types de conditions météorologiques
      }
    }else{
      return '';
    }
  };

  return (
    <>
      <Layout>

        <div className="">
          <div class="row justify-content-center align-items-center" >
            {/* <center className="me">by Zoddy </center> */}
              <div className={`app justify-content-center ${getVideoBackgroundClass()}`}>
                <div className="search-box">
                  <input 
                      type="text" 
                      className='search-input'
                      placeholder='Search here ...'
                      onChange={e=>setQuery(e.target.value)}
                      value={query}
                      onKeyDown={search}
                  />
                </div>
                { (typeof weather.main != "undefined") ? (
                  <div className="">
                    <div className="location-box">
                        <div className="location">{weather.name}, {weather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                      <div className="temp">
                        <center><div className="temp-value">{Math.round(weather.main.temp)}°C</div></center>
                      </div>
                      <div className="weather">
                        <div className="weather-icon">
                          {/* <i className="fas fa-sun"></i> */}
                        </div>
                        <div className="weather-desc">{weather.weather[0].main}</div>
                        <div className="weather-description">{weather.weather[0].description}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="nothing">
                      <br /><br /><br />
                      <img src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?resize=400x0" alt="" /><br /><br />
                      <center>Weather App React-js by zodyy ✨</center>
                    </div>
                  </div>
                ) }
                
              </div>
            
          </div>
        </div>

      </Layout>
    </>
  )
}

export default App
