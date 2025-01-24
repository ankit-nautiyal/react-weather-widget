import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL; // WORKING
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox() {
    let [city, setCity]= useState("");

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
        // console.log(jsonResponse);
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