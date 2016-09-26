import React from 'react';
export default class Weather extends React.Component {

  constructor(props){
    super(props);
    this.state= {location: [], weather:{main: {humidity: 0, temp: 0} }};
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
        console.log("WORKS");
        let currWeather = JSON.parse(request.responseText);
        // debugger
        this.setState({weather: currWeather });
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
        <div className="">Loading weather...</div>
      );
    }

    return(
      <div className="">
        Temperature: {this.state.weather.main.temp}
        Humidity: {this.state.weather.main.humidity}
      </div>
  );
  }
}
