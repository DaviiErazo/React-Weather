import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css'




const LocationList = ( { cities , onSelectLocation }) => {


    const handleWeatherLocationClick = city => {
        onSelectLocation(city);
    };


    const strToCompenents = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    key = { city } 
                    city = { city }
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>
            ))
    );


    return (
    <div className="locationList">
        {strToCompenents(cities)}
    </div>
    )
};

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
    onSelectLocation: PropTypes.func
}

export default LocationList;