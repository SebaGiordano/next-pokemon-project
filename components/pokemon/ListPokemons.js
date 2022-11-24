import React from 'react'
import NextLink from 'next/link';
import { Button, Card, Grid, Link, Text } from '@nextui-org/react'

const ListPokemons = () => {
  return (

    <NextLink href="/" passHref>
                    
                <Link css={{marginTop: '25px', backgroundColor: '$gradient'}}>
                    <Button color="gradient" ghost>Mas Pokemons!</Button>
                </Link>
                    
    </NextLink>

  )
}

export default ListPokemons
