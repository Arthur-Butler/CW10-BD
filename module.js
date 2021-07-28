import axios from 'axios';
const latt=0;
const long=0;

export function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos);
        var url=`https://aviation-edge.com/v2/public/flights?key=5eb4ea-2b179f&lat=${latt}&${long}&distance=100&arrIata=LHR`;
        axios.get(url)
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPos(position){
    console.log(`${position.coords.latitude}/${position.coords.longitude}`);
    latt = position.coords.latitude;
    long = position.coords.longitude;
}
