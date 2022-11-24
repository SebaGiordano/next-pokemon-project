import React from 'react'
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts/Layout'
import {getPokemonInfo} from './../../utils/getPokemonInfo'
import ListPokemons from '../../components/pokemon/ListPokemons';

const SearchPage = ({pokemon}) => {
  const router = useRouter()

  return (
    <Layout title='Pokemon | Busqueda'>

        <Grid.Container gap={2}>
            {pokemon && (
                <Grid xs={12}>
                    <Text h2>Encontramos un pokemon</Text>
                </Grid>
            )}

            <Grid xs={12} sm={4}>
                {pokemon && (
                    <Card
                        isPressable
                        onPress={() => router.push(`/name/${pokemon.name}`)}
                    >
                        <Card.Body>
                            <Card.Image
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                                src={ pokemon.sprites.other?.dream_world.front_default || '/img/pokebola.png' }
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Row justify='space-between'>
                                <Text h3 css={{textTransform: 'capitalize'}}>{pokemon.name}</Text>
                                <Text h4>#{pokemon.id}</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                )}

                {!pokemon &&
                    <Row 
                        justify='center'
                        css={{display: 'flex', flexDirection: 'column'}}
                    >
                        <Text h2>
                            No encontramos ningun Pokemon con el nombre ingresado!
                        </Text>

                        <Text>
                            Para volver al Home y ver la Galeria de Pokemons, haz clic en el boton de a continuacion!
                        </Text>

                        <ListPokemons/>
                    </Row >
                }
            </Grid>
        </Grid.Container>

    </Layout>
  )
};

export default SearchPage;

export const getServerSideProps = async ({params}) => {
    const {query = ''} = params

    if (query.length === 0) {
        return {
            redirect:{
                distination: '/',
                permanent: true
            }
        }
    }

    let pokemon = await getPokemonInfo(query.toLowerCase())

    return {
        props: {
            pokemon,
        }
    }
}
