import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity]= useState("");
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "0d1aed369fb5ab77467f3b428beec0b2";

    let getWeatherInfo= async () => {
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        let result= {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    }

    let handleChange= (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit= (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return(
        <div className='SearchBox'>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit} action="">
                <TextField required onChange={handleChange} value={city} id="city" label="City Name" variant="outlined"  /> <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}