const BEGIN = Math.floor(Date.now() / 1000 - 96 * 60 * 60); // Heure actuelle - 12h
const END = Math.floor(Date.now() / 1000 - 95.5 * 60 * 60); // Heure actuelle - 11h30
const URL_OPENSKY = "https://opensky-network.org/api/flights/all?begin=" + BEGIN + "&end=" + END;
const WEATHER_APIKEY = '62c28e834631c3fec8ba0451d3573532';

let box = document.querySelector('.principal-box');
let child = document.querySelector('.box-child');


function displayFlights() {
    fetch(URL_OPENSKY).then(response =>
        response.json().then(data => {
            console.log(data);
            let display = '<div class="container">';
            for (let flight of data) {
                display += `<div>
                                        <i class=\"fas fa-plane-departure text-center text-primary m-5\" title="Départ"> ${flight.estDepartureAirport}</i>
                                        <i class=\"fas fa-plane-arrival text-center text-warning m-5\" title="Arrivée"> ${flight.estArrivalAirport}</i>
                                    </div>`
            }
            display += '</div>';
            box.innerHTML = display;
        })
    ).catch(err => console.log('Erreur : ' + err));
}
