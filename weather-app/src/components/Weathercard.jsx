import React from 'react'

function Weathercard({weather}){
    const {name,main,weather:weatherData}=weather;
    const {temp,humidity}=main;
    const [{description,icon}]=weatherData;


    return(
        <div className="weather-card">
            <h2>{name}</h2>
            <img src={`https://e7.pngegg.com/pngimages/35/52/png-clipart-weather-forecasting-computer-icons-sunny-text-weather-forecasting.png`}alt={description}  />

            <p>{description}</p>
            <p>Temperature:{temp}°C</p>
            <p>Humidity:{humidity}%</p>
        </div>
    )
}

export default Weathercard