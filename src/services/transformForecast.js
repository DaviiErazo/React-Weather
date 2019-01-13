
import moment, { weekdays } from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

// Función para establecer un nuevo state en nuestro componente
const  transformForecast = data => (
    data.list.filter(item => (  
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
// Función de transformación (map), la cual espera una función encargada de realizar la transformación de cada uno de los elementos del array
    )).map(item => ( 
        {        
            weekDay : moment.unix(item.dt).utc().format('ddd'),
            hour: moment.unix(item.dt).utc().hour(),
            data : transformWeather(item)
        }        
    )) 
 );

export default transformForecast ;