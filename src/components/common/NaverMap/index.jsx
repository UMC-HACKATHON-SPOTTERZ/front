import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  InfoWindow,
  Polyline,
  Marker,
} from 'react-naver-maps';

const EndMarkerIcon = {
  content: `<svg width="45" height="45" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="location_on">
    <mask id="mask0_2_505" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="37">
      <rect id="Bounding box" width="37" height="37" fill="#69D2FF"/>
    </mask>
    <g mask="url(#mask0_2_505)">
      <path id="location_on_2" d="M18.5 18.5C19.3479 18.5 20.0737 18.1981 20.6776 17.5943C21.2814 16.9904 21.5833 16.2646 21.5833 15.4167C21.5833 14.5687 21.2814 13.8429 20.6776 13.2391C20.0737 12.6352 19.3479 12.3333 18.5 12.3333C17.652 12.3333 16.9262 12.6352 16.3224 13.2391C15.7185 13.8429 15.4167 14.5687 15.4167 15.4167C15.4167 16.2646 15.7185 16.9904 16.3224 17.5943C16.9262 18.1981 17.652 18.5 18.5 18.5ZM18.5 33.9167C14.3632 30.3965 11.2734 27.1269 9.23069 24.1078C7.18795 21.0887 6.16663 18.2944 6.16663 15.725C6.16663 11.8708 7.40638 8.80034 9.8859 6.51354C12.3654 4.22673 15.2364 3.08333 18.5 3.08333C21.7636 3.08333 24.6346 4.22673 27.1141 6.51354C29.5936 8.80034 30.8333 11.8708 30.8333 15.725C30.8333 18.2944 29.812 21.0887 27.7693 24.1078C25.7265 27.1269 22.6368 30.3965 18.5 33.9167Z" fill="#69D2FF"/>
    </g>
  </g>
</svg>

`,
  size: { width: 40, height: 40 },
  anchor: { x: 20, y: 20 },
};

const getScaledSize = zoom => {
  const baseSize = 37; // Base size of the SVG
  const scale = 1 + (zoom - 10) * 0.1; // Adjust scale as needed
  return { width: baseSize * scale, height: baseSize * scale };
};

const MyMap = ({ route, setRoute, destination, setDistance }) => {
  const navermaps = useNavermaps();

  const [zoom, setZoom] = useState(18);

  // useRef 대신 useState를 통해 ref를 가져옵니다.
  const [map, setMap] = useState(null);
  const [infowindow, setInfoWindow] = useState(null);
  /* 위도,경도순 */
  const [currentPosition, setCurrentPosition] = useState(null);

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return;

    setCurrentPosition([position.coords.longitude, position.coords.latitude]);
    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    map.setCenter(location);
    map.setZoom(zoom);
    // infowindow.setContent('<div style="padding:20px;">' + "나의 위치" + "</div>");
    // infowindow.open(map, location);

    var currentLocation = new naver.maps.Marker({
      position: location,
      map: map,
    });

    console.log('Coordinates: ' + location.toString());
  }

  function onErrorGeolocation() {
    if (!map || !infowindow) return;

    const center = map.getCenter();
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        'latitude: ' +
        center.lat() +
        '<br />longitude: ' +
        center.lng() +
        '</div>'
    );
    infowindow.open(map, center);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }

  useEffect(() => {
    if (!map || !infowindow) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      var center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);

  const FindRoutes = async destination => {
    /* 경도,위도순 */
    const getRoutes = await axios.get('/api/findRoute', {
      params: {
        start: `${currentPosition[0]},${currentPosition[1]}`,
        goal: destination.goal,
      },
    });

    const getRouteResult = getRoutes.data.data;

    setRoute(getRouteResult);

    /* 위도,경도순 */
    var startPos = new naver.maps.Marker({
      position: new navermaps.LatLng(
        getRouteResult.startPos[0],
        getRouteResult.startPos[1]
      ),
      map: map,
    });

    var endPos = new naver.maps.Marker({
      position: new navermaps.LatLng(
        getRouteResult.endPos[0],
        getRouteResult.endPos[1]
      ),
      map: map,
      icon: EndMarkerIcon,
      size: getScaledSize(zoom),
    });

    setDistance(parseInt(String(getRouteResult.distance).slice(0, 3)));
  };

  useEffect(() => {
    if (destination && currentPosition) {
      FindRoutes(destination);
    }
  }, [destination, currentPosition]);

  return (
    <div>
      <NaverMap
        // uncontrolled
        defaultCenter={new navermaps.LatLng(127.0301911, 127.0452092)}
        defaultMapTypeId={navermaps.MapTypeId.NORMAL}
        ref={setMap}
      >
        {route && (
          <Polyline
            path={route.path.map(
              ([lng, lat]) => new window.naver.maps.LatLng(lat, lng)
            )}
            // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
            strokeColor={'#69D2FF'}
            strokeStyle={'solid'}
            strokeOpacity={0.8}
            strokeWeight={4}
          />
        )}
        <InfoWindow ref={setInfoWindow} />
      </NaverMap>
    </div>
  );
};

export default function NaverMapComponent({
  route,
  setRoute,
  destination,
  setDistance,
}) {
  return (
    <MapDiv
      style={{
        width: 'calc(500px - 8px - 8px)',
        height: '400px',
      }}
    >
      <NaverMap>
        <MyMap
          route={route}
          setRoute={setRoute}
          destination={destination}
          setDistance={setDistance}
        />
      </NaverMap>
    </MapDiv>
  );
}
