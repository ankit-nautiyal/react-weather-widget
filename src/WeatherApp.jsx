import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState({
        city: "",
        feelsLike: 24.84,
        temp: 25.2,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo= (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div className="WeatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}