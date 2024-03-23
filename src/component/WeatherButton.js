import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
    return (
        <div className='buttonBox'>
            <Button variant="warning" className='LocationBtn'>Current Location</Button>{' '}
            <Button variant="warning" className='LocationBtn'>Busan</Button>{' '}
            <Button variant="warning" className='LocationBtn'>Incheon</Button>{' '}
        </div>
    )
}

export default WeatherButton