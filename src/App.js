import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";
import "../src/App.css";

export default class App extends Component {
  state = {
    city: "City",
    country: "Country",
    temp: "TEMP",
    max_temp: "MAX",
    min_temp: "MIN",
    icon: "",
    description: "",
    feels_like: "",
    humidity: "",
    wind: "",
    pressure: "",
  };

  getData = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const API_KEY = "8d0b0ac2d381973b840ce2598bf49613";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await response.json();

    this.setState({
      city: city,
      country: data.sys.country,
      temp: this.convertToCelsuis(data.main.temp),
      max_temp: this.convertToCelsuis(data.main.temp_max),
      min_temp: this.convertToCelsuis(data.main.temp_min),
      icon: data.weather[0].icon,
      feels_like: this.convertToCelsuis(data.main.feels_like),
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      description: data.weather[0].description,
    });
  };

  convertToCelsuis = (temp) => {
    return Math.floor(temp - 273.15);
  };

  render() {
    return (
      <>
        <Form getData={this.getData} />
        <Weather data={this.state} />
      </>
    );
  }
}

