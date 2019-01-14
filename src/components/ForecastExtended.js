import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css'
import transformForecast from './../services/transformForecast'
// import WeatherData from './WeatherLocation/WeatherData';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}
*/

export const api_key = "350d9dbc80864eb934b781a2b94e2e27";
export const url = "http://api.openweathermap.org/data/2.5/forecast";




class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = ({
            forecastData: null
        })
    }

    componentDidMount() {
        // fetch or axios
        this.updateCity(this.props.city);
    
    }


    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    
        fetch(url_forecast).then(
            data => (data.json())        
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        )

    }


    renderForecastItemDays( forecastData ){
       return(
            forecastData.map(forecast => (
                <ForecastItem 
                    key={`${forecast.weekday}${forecast.hour}`}
                    weekday = {forecast.weekday}
                    hour = {forecast.hour}
                    data = {forecast.data}
                />
            ))
       );
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData : null })
            this.updateCity(nextProps.city);
        }
    }


    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>;
    }


    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                { forecastData ?
                    this.renderForecastItemDays( forecastData ):
                    this.renderProgress()  
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;