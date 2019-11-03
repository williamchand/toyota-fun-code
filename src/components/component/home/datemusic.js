import React, {useState} from 'react';
import Clock from 'react-digital-clock';
import {Card} from 'react-bootstrap';
// import Forecast from 'react-forecast';
//Optional include of the default css styles 
import ReactAudioPlayer from 'react-audio-player';

function DateMusicView() {
  const [userlat, setUserLat] = useState(43.855472);
  const [userlng, setUserLng] = useState(18.410574);
  const [weather, setWeather] = useState({});
  
  React.useEffect(() => {
    navigator.geolocation.watchPosition(function(position) {
      setUserLat(position.coords.latitude);
      setUserLng(position.coords.longitude);
    });
  },
    [setUserLng, setUserLat]
  );
  React.useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userlat}&lon=${userlng}&appid=379c73d39ee69ae7ab75561b09a35cdf`).then(res => res.json())
      .then(response => setWeather(response));
  }, [userlat, userlng]);
  console.log(weather);
  return (
    <Card style={{backgroundColor: 'transparent'}}>
      <Card.Body>
        <div style={{display: 'flex'}}>
        <p><Clock /></p>
        <p style={{color:'white'}}>Jakarta Now { weather.main && weather.main.temp ? (weather.main.temp-273.15).toFixed(2) : ''} Celcius with { weather.weather && weather.weather[0].description ? weather.weather[0].description : ''}</p>
          <div style={{color:'white'}}>
            <Card style={{border: '0px', backgroundColor: 'transparent'}}>
              <Card.Body style={{padding: '0px'}}>
              </Card.Body>
            </Card>
          </div>
          <ReactAudioPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            autoPlay
            controls
          />,
          {/* <Forecast latitude={userlat} longitude={userlng} name='Jakarta' /> */}
        </div>
      </Card.Body>
    </Card>
    
  );
}

export default DateMusicView;
