import React, { useState } from 'react'

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { getPokemonInfo, localFavorites } from '../../utils';


const PokemonPage = ({pokemon}) => {

    // console.log(pokemon);

    // ESTO ES PARA LEER Y VERIFICAR SI EXISTE EN FAVORITOS
    const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setisInFavorites( !isInFavorites )

        if (isInFavorites) return

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin:{
                x: 1,
                y: 0
            }
        })
    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding: '30px'}} style={{backgroundColor: '$gradient'}}>
                        <Card.Body>
                            <Card.Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                                alt={pokemon.name}
                                width= '100%'
                                height={200}  
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card style={{backgroundColor: '$gradient'}}>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button 
                                color="gradient" 
                                ghost = { !isInFavorites }
                                onClick={ onToggleFavorite }
                            >
                                {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites:</Text>

                            <Container display='flex' direction='row'>
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>

        </Layout>
    )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// EL GETSTATICPATHS SOLO SE EJECUTA DEL LADO DEL SERVIDOR Y SOLO SE VA A EJECUTAR 1 SOLA VEZ CUANDO SE HAGA EL BUILD DE PRODUCCION, CUANDO SE TRABAJA EN DESARROLLO SE LLAMA CADA VEZ QUE SE EJECUTE ESA PANTALLA

export const getStaticPaths = async (ctx) => {
    
    const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}` )
    console.log({pokemons151})
    
    return {
        paths: pokemons151.map( id => ({
            params: {id}
        })),
        //fallback: false
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({params}) => {
    
    const {id} = params

    const pokemon = await getPokemonInfo(id)

    if ( !pokemon ) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
      props: {
        pokemon: pokemon
      },
      // INCREMENTAL STATIC REGENERATION
      revalidate: 86400, //60 * 60 * 24
    }
}


export default PokemonPage
