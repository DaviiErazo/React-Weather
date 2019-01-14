import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions/';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity();
    }

    render() {
        return (
            <LocationList cities={this.props.cities} 
            onSelectLocation={this.handleSelectionLocation}/>
        );
    }
}

LocationListContainer.propTypes = {

};


LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}


const mapDispatchToProps = dispatch => ({
    setCity: value =>  dispatch( setCity(value))
});

// Función que retorna otra función que espera como parametro el componente (App)
export default  connect(null, mapDispatchToProps)(LocationListContainer);
// El App que se devuelve es el App resultante de la conección connect, inyectaod con las funciones, en la cual se le inyecta un props 
