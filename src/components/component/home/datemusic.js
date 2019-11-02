import React, {useState} from 'react';
import Clock from 'react-digital-clock';
import {Card} from 'react-bootstrap';
import ReactWeather from 'react-open-weather';
// import Forecast from 'react-forecast';
//Optional include of the default css styles 
import 'react-open-weather/lib/css/ReactWeather.css';
import WeatherWidget from 'weather-widget-react';
 
function DateMusicView() {
  const [userlat, setUserLat] = useState(43.855472);
  const [userlng, setUserLng] = useState(18.410574);
  
  React.useEffect(() => {
    navigator.geolocation.watchPosition(function(position) {
      setUserLat(position.coords.latitude);
      setUserLng(position.coords.longitude);
    });
  },
    [setUserLng, setUserLat]
  );

  return (
    <Card style={{backgroundColor: 'transparent'}}>
      <Card.Body>
        <div style={{display: 'flex'}}>
          <Clock />
          <WeatherWidget
            apiKey='7cc0a3060e58f17a24e70b46ad9ed851'
            position='top-left'
            location='Jakarta'
            units='metric'
            lang='eng'
          />,
          {/* <Forecast latitude={userlat} longitude={userlng} name='Jakarta' /> */}
        </div>
      </Card.Body>
    </Card>
    
  );
}

export default DateMusicView;
