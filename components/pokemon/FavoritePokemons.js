import React from 'react'
import { Card, Grid } from '@nextui-org/react'
import { FavoriteCardPokemons } from './'

export const FavoritePokemons = ({pokemons}) => {
  return (
    
    <Grid.Container gap= {2} direction='row' justify='flex-start'>

    {
        pokemons.map( id => (
            <FavoriteCardPokemons key = {id} pokemonId = {id} />
        ))
    }

    </Grid.Container>
  )
}
