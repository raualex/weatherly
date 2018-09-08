import React, { Component } from 'react';
import './App.css';
import { data } from './mockdata.js'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHour from './SevenHour'
import TenDay from './TenDay'

export default class App extends Component {
  constructor() {
    super();

      this.state = {
        userName: '', 
        location: ''
      }
      this.takeNameAndLocation = this.takeNameAndLocation.bind(this); 
  }

  takeNameAndLocation(name, location) {
    
    this.setState({userName: name, location: location})
    console.log(this.state, '')
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="logo" src={require("./images/weathrly-logo.png")}/>
        </header>
        <Welcome takeNameAndLocation={this.takeNameAndLocation}/>
        <CurrentWeather weatherData={data} />
        <div className="seven-hours">
          <SevenHour sevenHourData={data} />
        </div>
        <TenDay tenDayData={data} />
      </div>
    );
  }
}

