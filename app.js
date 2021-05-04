/*var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidG9tMTM1OCIsImEiOiJja284aDJydGQybWc1MnhwZ2V0aWUxb2JpIn0.0hLrp4EP06L3YXBgr7-B1A'
}).addTo(mymap);

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


async function getData() {
    const xs = [];
    const ys= [];
    const response = await fetch('NASA info.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xs.push(year);
        const temp = columns[1];
        ys.push(parseFloat(temp) + 14);
        console.log(year, temp);
    });
    return {xs, ys};
}

chartIt();
async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in °C',
                data: data.ys,
                backgroundColor: 
                    ['rgba(255, 99, 132, 0.2)'],
                borderColor:
                    ['rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}*/



const api_url="https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    console.log(latitude);
    console.log(longitude);
};

getISS();