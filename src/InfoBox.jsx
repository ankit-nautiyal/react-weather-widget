import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox(info){
    const IMG_URL= "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={IMG_URL}
                    title="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
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