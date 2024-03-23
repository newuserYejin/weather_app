import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ selected, cities, setCity, getCurrentLocation }) => {
    const AddSelect = () => {

    }
    return (
        <div className='buttonBox'>
            {console.log("selected: ", selected)}
            <Button variant="warning" className='LocationBtn' onClick={() => { setCity("current") }} id={selected == "" ? "select" : selected == "current" ? "select" : "none"}>Current Location</Button>

            {cities.map((item) => (
                <Button variant="warning"
                    className='LocationBtn'
                    onClick={() => {
                        setCity(item)
                    }}
                    id={selected == item ? "select" : "none"}
                > {item}</Button>
            ))
            }

        </div >
    )
}

export default WeatherButton