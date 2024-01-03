import './style.css';
import L from 'leaflet';

const ResultMapSetting = (queryResult) => {


    if(document.getElementById("map") !== null){
        document.getElementById("map").remove();
    }

    document.getElementById("mapdiv").insertAdjacentHTML("afterbegin","<div id='map'></div> ");
    document.getElementById("mapdiv").style.height = '360px';
    var map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let episodeLongitude = queryResult.episodeLongitude;
    let episodeLatitude = queryResult.episodeLatitude;
    let queryLongitude = queryResult.queryLongitude;
    let queryLatitude = queryResult.queryLatitude;
    let episodeCoord = [episodeLatitude,episodeLongitude];
    let queryCoord = [queryLatitude,queryLongitude];
    
    if(((episodeLongitude - queryLongitude) > 180)||((episodeLongitude - queryLongitude) < -180)){
        if (episodeLongitude >=0){
            episodeCoord = [episodeLatitude,(episodeLongitude-360)];
        }
        else{
            episodeCoord = [episodeLatitude,(episodeLongitude+360)];
        }        
        queryCoord = [queryLatitude,queryLongitude];
    }

    var JIcon = L.icon({
        iconUrl: 'img/Jojo J with shadow 27w 41h.png',
        iconSize:     [27, 41],
        iconAnchor:   [18, 41],
        popupAnchor:  [-3, -44]
    });

    var episodePopup = L.popup().setContent('<p>' + queryResult.episodeName + '<br/>Lat: ' + episodeCoord[0] + '<br/>Long: ' + episodeCoord[1] + '</p>');
    var episodeLayer = L.marker(episodeCoord,{icon: JIcon}).bindPopup(episodePopup).openPopup().addTo(map);
    episodeLayer.addTo(map);

    var queryPopup = L.popup().setContent('<p>Your Coordinates<br/>Lat: ' + queryCoord[0] + '<br/>Long: ' + queryCoord[1] + '</p>');
    var queryLayer = L.marker(queryCoord).bindPopup(queryPopup).openPopup().addTo(map);
    queryLayer.addTo(map);

    const polycoord = [episodeCoord,queryCoord];
    L.polyline(polycoord, {color: 'red'}).addTo(map);

    if (episodeCoord[0] > queryCoord[0]){
        episodeCoord[0] = episodeCoord[0] + 0.2*(episodeCoord[0]-queryCoord[0]);
    }
    else{
        queryCoord[0] = queryCoord[0]  + 0.2*(queryCoord[0]-episodeCoord[0]);
    }
    if (episodeCoord[1] > queryCoord[1]){
        episodeCoord[1] = episodeCoord[1] + 0.2*(episodeCoord[1]-queryCoord[1]);
    }
    else{
        queryCoord[1] = queryCoord[1]  + 0.2*(queryCoord[1]-episodeCoord[1]);
    }

    map.fitBounds([queryCoord,episodeCoord]);
    
    
}

export default ResultMapSetting;
