import React, { useState } from "react";
import { GoogleMap, LoadScript, useGoogleMap } from "@react-google-maps/api";
import Marker from './Marker'
function MyComponentWithHook(props) {
  const map = useGoogleMap();

  React.useEffect(
    function effect() {
      map.addListener("center_changed", () => {
        const lat = map.center.lat();
        const lng = map.center.lng();

        props.setLat(lat);
        props.setLng(lng);
      });
    },
    [map, props]
  );

  return (
    <div>
      Lat {map.center.lat()} Lng {map.center.lng()}
    </div>
  );
}

const MemoizedMyComponentWithHook = React.memo(MyComponentWithHook);

function GoogleMapsView() {
  // Initial map coordinates that will change
  // when onCenterChanged is called
  const [lat, setLat] = useState(43.855472);
  const [lng, setLng] = useState(18.410574);
  const [userlat, setUserLat] = useState(43.855472);
  const [userlng, setUserLng] = useState(18.410574);
  
  React.useEffect(() => {
    navigator.geolocation.watchPosition(function(position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      setUserLat(position.coords.latitude);
      setUserLng(position.coords.longitude);
    });
  },
    [setLat, setLng]
  );
  return (
    <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
      {/* Google maps has whitelisted codesandbox with overlay, so there is enough to pass an empty string, but for your own app, you need to provide your own api key. Please do not forget to restrict it for your own domain name. */}
      <LoadScript googleMapsApiKey={"AIzaSyC2fUo6YVS3ZBtrOg1KOWB1VkxvCklIavA"}>
        <GoogleMap
          id="my-map"
          zoom={13}
          mapContainerStyle={{
            flex: 1
          }}
          center={{
            lat,
            lng
          }}
          // I want to set new center coordinates
          // whenever user moves in the map
          // since there will be an option to add
          // a marker on a map, and that will trigger
          // rerender and map needs to stay where
          // it was before rerender
        >
          <MemoizedMyComponentWithHook setLat={setLat} setLng={setLng} />
          <Marker
            lat={userlat}
            lng={userlng}
            text="My Marker"
            color="blue"
          />
        </GoogleMap>
        
      </LoadScript>
    </div>
  );
}

export default GoogleMapsView;
