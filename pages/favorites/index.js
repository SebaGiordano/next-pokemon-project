import React, { useEffect, useState } from 'react'

import { Card, Container, Grid, Text} from '@nextui-org/react'

import { Layout } from '../../components/layouts'
import { localFavorites } from '../../utils'
import { FavoritePokemons } from '../../components/pokemon'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState([])

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() )
  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>

          {
            favoritePokemons.length === 0 ? 
            
            (
              <Container css={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'
              }}>
      
                <Text h1> No hay Favoritos</Text>
                
                </Container>
              ) 
              
              : (
                  <FavoritePokemons pokemons =  {favoritePokemons}/>
                )
          }

    </Layout>
  )
}

export default FavoritesPage
