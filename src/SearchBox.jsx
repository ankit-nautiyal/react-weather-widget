import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState, useEffect } from 'react';




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
            return result;
        }catch(error){
            throw err;
        }
        
    }

    useEffect(() => {
		let randomWeather = async () => {
			let cities = [
				"DELHI",
				"MUMBAI",
				"PARIS",
				"CHENNAI",
				"LONDON",
			];
			let cityName = cities[Math.floor(Math.random() * 5)];
			let res = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
			let resJson = await res.json();
			let result = {
				city: cityName,
				feelsLike: resJson.main.feels_like,
				humidity: resJson.main.humidity,
				temp: resJson.main.temp,
				tempMax: resJson.main.temp_max,
				tempMin: resJson.main.temp_min,
				weather: resJson.weather[0].description,
			};
			updateInfo(result);
		};
		randomWeather();
	}, []);

    let handleChange= (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit= async (event) =>{
        event.preventDefault();
        try {
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // Reset the error state if the request is successful i.e.the correct city is found
        } catch (error) {
            setError(true); // Set the error state true if the request fails i.e. city not found
        } finally{
            setCity(""); // Clear the input field regardless of the outcome i.e. regardless of city is found or not
        }
    }

    return(
        <div className='SearchBox'>     
            <form onSubmit={handleSubmit} action="">
                <TextField id="input" required onChange={handleChange} value={city} label="City Name" variant="outlined"  />

                <Button id='btn' variant="contained" type='submit' endIcon={<SendIcon />} > Search</Button>
                
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}