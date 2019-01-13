import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList'
import ForecastExtended from "./components/ForecastExtended";

const cities = [
  'Buenos Aires,ar',
  "Washington,us",
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
]

class App extends Component {

  constructor(){
    super();
    this.state = { city : null}
  }

  handleSelectionLocation = city => {
    this.setState({ city }); // city:city

  }
  render() {
    const { city } = this.state
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'> {/* sticky hace que permanezca arriba */}
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          {/* Cuando este en tamaño chico (xs), ocupara la totalidad del ancho (12),
              en cambio cuando es tamaño medio, que ocupe la mitad de la totalidad (6)
          */}
          <Col xs={12} md={6}> 
            <LocationList cities={cities} onSelectLocation={this.handleSelectionLocation}/>
          </Col>
          <Col xs={12} md={6}> 
            <Paper elevation={4}>
             <div className="details">
             {city ? 
                  <ForecastExtended city = {city}/> :
                  <h1>No se selecionó ciudad</h1>
             }

             </div>
            </Paper>
          </Col>

        </Row>
      </Grid>

    );
  }
}

export default App;
