import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.2,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by- Ankit Nautiyal</h2>
            <SearchBox/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}