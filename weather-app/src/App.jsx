
import React,{ useState } from "react"
import Weathercard from "./components/Weathercard"


  const API_KEY='ecd93a4edfcdcf7a7d7d578aedad6242';

  function App(){
    const [city,setCity] =useState('');
    const [weather, setweather]=useState(null);
    const [error, setError]=useState('');


    const fetchWeather=async()=>{
      try{
        const response=await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=524901&appid=ecd93a4edfcdcf7a7d7d578aedad6242`
        );
        if (!response.ok){
          throw new Error('City not found')
        }
        const data=await response.json();
        setweather(data);
        setError('');
      }
      catch(err){
        setError(err.message);
        setweather(null);
      }
    };

    const handleSearch =(e)=>{
      e.preventDefault();
      if(city){
        fetchWeather();
      }
    };

    return(
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleSearch}>
          <input 
          type="text"
          placeholder="Enter you City"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>

        {error && <p>{error}</p>}
        {weather && <Weathercard weather={weather} />}
      </div>
    );
  }

export default App