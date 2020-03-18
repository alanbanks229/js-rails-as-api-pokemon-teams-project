class PokemonsController < ApplicationController

    def index
        pokemon = Pokemon.all
        render json: pokemon
    end
end
