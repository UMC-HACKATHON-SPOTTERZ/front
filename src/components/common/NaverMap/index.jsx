import axios from "axios";
import { useState, useRef, useEffect } from "react";
import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  InfoWindow,
  Polyline,
  Marker,
} from "react-naver-maps";

const MyMap = ({ route, setRoute, destination, setDistance }) => {
  const navermaps = useNavermaps();

  // useRef 대신 useState를 통해 ref를 가져옵니다.
  const [map, setMap] = useState(null);
  const [infowindow, setInfoWindow] = useState(null);
  /* 위도,경도순 */
  const [currentPosition, setCurrentPosition] = useState(null);

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return;

    setCurrentPosition([position.coords.longitude, position.coords.latitude]);
    const location = new navermaps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(location);
    map.setZoom(18);
    // infowindow.setContent('<div style="padding:20px;">' + "나의 위치" + "</div>");
    // infowindow.open(map, location);

    var currentLocation = new naver.maps.Marker({
      position: location,
      map: map,
    });

    console.log("Coordinates: " + location.toString());
  }

  function onErrorGeolocation() {
    if (!map || !infowindow) return;

    const center = map.getCenter();
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        "latitude: " +
        center.lat() +
        "<br />longitude: " +
        center.lng() +
        "</div>"
    );
    infowindow.open(map, center);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
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
      navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
    } else {
      var center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);

  const FindRoutes = async (destination) => {
    /* 경도,위도순 */
    const getRoutes = await axios.get("/api/findRoute", {
      params: { start: `${currentPosition[0]},${currentPosition[1]}`, goal: destination.goal },
    });

    const getRouteResult = getRoutes.data.data;

    setRoute(getRouteResult);

    /* 위도,경도순 */
    var startPos = new naver.maps.Marker({
      position: new navermaps.LatLng(getRouteResult.startPos[1], getRouteResult.startPos[0]),
      map: map,
    });

    var endPos = new naver.maps.Marker({
      position: new navermaps.LatLng(getRouteResult.endPos[1], getRouteResult.endPos[0]),
      map: map,
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
            path={route.path.map(([lng, lat]) => new window.naver.maps.LatLng(lat, lng))}
            // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
            strokeColor={"#ff3344"}
            strokeStyle={"solid"}
            strokeOpacity={0.8}
            strokeWeight={4}
          />
        )}
        <InfoWindow ref={setInfoWindow} />
      </NaverMap>
    </div>
  );
};

export default function NaverMapComponent({ route, setRoute, destination, setDistance }) {
  return (
    <MapDiv
      style={{
        width: "calc(500px - 8px - 8px)",
        height: "400px",
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
