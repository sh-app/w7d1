import React from 'react';
export default class Weather extends React.Component {

  constructor(props){
    super(props);
    this.state= {location: [], weather:{main: {humidity: 0, temp: 0}}, description: ""};
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {

    let newLocation = navigator.geolocation.getCurrentPosition(this.geoSuccess.bind(this), this.geoError);
  }

  geoSuccess(position) {

    let location = [position.coords.latitude, position.coords.longitude];

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(location[0])}&lon=${Math.floor(location[1])}&APPID=bf5c9d95858f95b697f90790ed9db0bc`;
    this.setState({location: location});
    this.getWeather(url);
  }

  getWeather(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function (){
      if (request.status >= 200 && request.status < 400) {
        let currWeather = JSON.parse(request.responseText);
        // debugger
        this.setState({weather: currWeather, description: currWeather.weather[0].description});
      }
    }.bind(this);
    request.onerror = function() {
      console.log("YOUGOOFED");
    };
    request.send();
  }

  geoError(error){
    console.log(error.message);
  }

  render() {
    if (this.state.weather.main.temp === 0) {
      return(
        <div className="clock-div whole-tab group">
          <h1 className="header-weather">Today's Weather</h1>
          <ul className="border clock-ul">
            <li>Loading weather...</li>
          </ul>
        </div>
      );
    }

    return(
      <div className="clock-div whole-tab group">
        <h1 className="header-weather">Today's Weather</h1>
        <ul className="border clock-ul">
          <li>Temperature: {Math.floor((this.state.weather.main.temp - 273.15)*1.8 + 32)}° F</li>
          <li>Humidity: {this.state.weather.main.humidity}</li>
          <li>Current conditions: {this.state.description}</li>
        </ul>
      </div>
  );
  }
}
