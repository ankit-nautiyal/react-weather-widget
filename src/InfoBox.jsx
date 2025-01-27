import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){

    const HOT_URL= "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL= "https://cdn.pixabay.com/photo/2015/10/20/14/12/cabin-997781_960_720.jpg";
    const RAIN_URL= "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 1500 }} className="card">
                <CardMedia
                    sx={{ height: 160 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="weather image"
                    id="img"
                />
                <CardContent className="cardContent">

                    <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                    {info.city.toUpperCase()} 

                    <span id="icon">
                    {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </span>
                    
                    </Typography>

                    <Typography id='tempInfo' component="div" variant="body2" sx={{ color: 'text.secondary' }} > 
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>Max Temp: {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> & feels like <i>{info.feelsLike}&deg;C</i></p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}