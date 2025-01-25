import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){
    const IMG_URL= "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=";

    const HOT_URL= "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL= "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                    title="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}  
                    {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div>Temperature: {info.temp}&deg;C</div>
                    <div>Humidity: {info.humidity}</div>
                    <div>Min Temp: {info.tempMin}&deg;C</div>
                    <div>Max Temp: {info.tempMax}&deg;C</div>
                    <div>The weather is described as <i>{info.weather}</i> feels like <i>{info.feelsLike}&deg;C</i></div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}