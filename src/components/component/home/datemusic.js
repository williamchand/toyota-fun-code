import React, {useState} from 'react';
import Clock from 'react-digital-clock';
import {Card} from 'react-bootstrap';
// import Forecast from 'react-forecast';
//Optional include of the default css styles 
import ReactAudioPlayer from 'react-audio-player';

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
          <ReactAudioPlayer
            src="http://streaming.tdiradio.com:8000/house.mp3"
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
