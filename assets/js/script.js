const BEGIN=Math.floor(Date.now() / 1000 - 96 * 60 * 60); // Heure actuelle - 48h
const END=Math.floor(Date.now() / 1000 - 95.5 * 60 * 60); // Heure actuelle - 47h45
const URL_OPENSKY="https://opensky-network.org/api/states/all?begin=" + BEGIN + "&end=" + END;
const WEATHER_APIKEY='62c28e834631c3fec8ba0451d3573532';

let box=document.querySelector('.box-container');
let tab=document.querySelector('#tab');


function displayFlights() {
    fetch(URL_OPENSKY).then(response =>
        response.json().then(data => {
            console.log(data);
            let display = '<table id="tab" class="table table-hover"><thead><tr><th scope="col"><i class="fas fa-space-shuttle text-center text-primary m-5" title="icao24"></i></th><th scope="col"><i class="fas fa-signal text-center text-primary m-5" title="callsign"></i></th><th scope="col"><i class="fas fa-long-arrow-alt-right text-center text-success m-5" title="latitude"></i></th><th scope="col"><i class="fas fa-long-arrow-alt-up text-center text-success m-5" title="longitude"></i></th><th scope="col"><i class="fas fa-temperature-low text-center text-warning m-5" title="barometric altitude"></i></th><th scope="col"><i class="fas fa-search-location text-center text-info m-5" title="consulter"></th></tr></thead></table><tbody><tr class="table-hover">';
            for (let flight of data.states)
            {

                display += `   
                            <th scope="row"> ${flight[0]}</th>
                            <td class="text-center">${flight[1]}</td>
                            <td class="text-center">${flight[5]}</td>
                            <td class="text-center">${flight[6]}</td>
                            <td class="text-center">${flight[7]}</td>
                            <td class="text-center"><button type="button" class="btn btn-outline-info"><i class="fas fa-hand-pointer" title="details"></i></button></td>
                        </tr> 
                    </tbody> 
                `;
            }
            display += '</table>';
            tab.innerHTML = display;
            })
    ).catch(err => console.log('Erreur : ' + err));
}

displayFlights();
