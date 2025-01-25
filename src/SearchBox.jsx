import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL; // WORKING
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox({updateInfo}) {
    let [city, setCity]= useState("");
    let [error, setError]= useState(false);

    let getWeatherInfo= async () => {
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            let result= {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(error){
            throw err;
        }
        
    }

    let handleChange= (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit= async (event) =>{
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>     
            <form onSubmit={handleSubmit} action="">
                <TextField required onChange={handleChange} value={city} id="city" label="City Name" variant="outlined"  /> <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}