
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
const api ={
  key: "bceaa5600956731f7e5474c6c7af2ac4",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery]= useState('');
  const [weather, setWeather]= useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key} `)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className="App">
      <main>
        <div className="searchbox">
          <input 
            type= "text"
            className= "searchbar"
            placeholder= "Searching..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress ={search}
            />
        </div>
        {(typeof weather.main != "undefined") ? ( 
      <div>
        <div className="locationbox">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{date}</div>
        </div>
        <div className= "weatherbox">
          <div className ="temp"> 
          {Math.round(weather.main.temp)}°C
           </div>
          <div className="weather"> {weather.weather[0].main}</div>
        </div>
        </div>
        ) : ('')}
      </main>
    </div>
        
  );
}

export default App;
