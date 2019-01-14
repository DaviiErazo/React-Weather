import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'Buenos Aires,ar',
  "Washington,us",
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
]


class App extends Component {


  render() {
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
            <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}> 
            <Paper elevation={4}>
             <div className="details">
                  <ForecastExtendedContainer /> 
             </div>
            </Paper>
          </Col>

        </Row>
      </Grid>

    );
  }
}



export default App ;

