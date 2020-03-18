class PokemonsController < ApplicationController

    def index
        pokemon = Pokemon.all
        render json: pokemon
    end

    def create
        pokemon = Pokemon.create(species:"Kakuna", nickname:"Jeffrey", trainer_id: params["trainer_id"])
        render json: pokemon
    end
end
