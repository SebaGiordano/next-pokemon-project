import React from 'react'
import { pokeApi } from '../api'

export const getPokemonInfo = async( nameOrId) => {

    try {

        const { data }  = await pokeApi.get(`/pokemon/${nameOrId}`)
    
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
            stats: data.stats,
            weight: data.weight,
            types: data.types,
            abilities: data.abilities,
            moves: data.moves,
            base_experience: data.base_experience
        }

    } catch (error) {

        return null
    }
}
