const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', ()=> {

    fetchTrainers() //Makes cards

})


function fetchTrainers(){
    fetch(TRAINERS_URL)
        .then(resp => resp.json())
        .then(json => json.forEach( trainer => makeCard(trainer)))
}

function makeCard(trainer){
    console.log(trainer)
}