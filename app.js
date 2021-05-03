/*var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidG9tMTM1OCIsImEiOiJja284aDJydGQybWc1MnhwZ2V0aWUxb2JpIn0.0hLrp4EP06L3YXBgr7-B1A'
}).addTo(mymap);*/

console.log('about to fetch a rainbow');
fetch('/rainbow.jpeg').then(response => {
    console.log(response);
    return response.blob().then(blob => {
        console.log(blob);
        document.getElementById('rainbow').src = URL.createObjectURL(blob);
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    })
    });

// data from https://data.giss.nasa.gov/gistemp/
getData();

async function getData() {
    const response = await fetch('NASA info.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
        console.log(year, temp);
    });
}
