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
    let trainer_container = document.querySelector('.Trainer_Container')
    let new_div = document.createElement('div')
    new_div.className = "card"
    new_div.dataset.trainerId = trainer.id
    let trainer_name = document.createElement('h2')
    trainer_name.innerText = `${trainer.name}`

    let addBtn = document.createElement('button')
    addBtn.dataset.trainerId = trainer.id
    addBtn.addEventListener('click', (event) => addPokemon(event,trainer))
    addBtn.innerText = "Add Pokemon"

    let pokemonUl = document.createElement('ul')
    //Making an iterator for pokemons owned by trainer
    trainer.pokemons.forEach( pokemonObject => {
        let newPokemonLi = document.createElement('li')
        newPokemonLi.innerText = `${pokemonObject.species} (${pokemonObject.nickname})`
        let releaseBtn = document.createElement('button')
        releaseBtn.addEventListener('click', console.log("released"))
        pokemonUl.append(newPokemonLi, releaseBtn)
    })
    new_div.append(trainer_name, addBtn, pokemonUl)
    trainer_container.appendChild(new_div)
    //console.log(trainer)
}

function addPokemon(event,trainer) {
    let newPoke = {nickname: "Jeff", species: "Kakuna", trainer_id: trainer.id}
    let current_trainer = trainer
    current_trainer.pokemons.push(newPoke)
    fetch(POKEMONS_URL,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accepts": "application/json"    
        },
        body: JSON.stringify({"trainer_id": trainer.id})
    }) 
        .then(resp => resp.json())
        .then(json => makeCard(current_trainer))
}