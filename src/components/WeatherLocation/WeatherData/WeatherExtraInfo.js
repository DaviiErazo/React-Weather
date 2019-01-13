import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'



const WeatherExtraInfor = ({humidity, wind}) => (
   <div className= "weatherExtraInfCont">
    <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
    <span className="extraInfoText">{`Vientos: ${wind}`}</span>
   </div>

);

WeatherExtraInfor.propTypes = {
   humidity: PropTypes.number.isRequired,
   wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfor;