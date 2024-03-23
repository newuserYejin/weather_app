import React from 'react'

const WeatherBox = ({ weather }) => {
    return (
        <div className='weatherbox'>
            <div>Location: {weather?.name}</div>
            <div>temp: {weather?.main.temp}&deg;C / {((weather?.main.temp * 9 / 5) + 32).toFixed(2)}&deg;F</div>
            <div>{weather?.weather[0].description}</div>
        </div >
    )
}

export default WeatherBox