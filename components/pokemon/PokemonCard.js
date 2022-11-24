import React from 'react'

import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

export const PokemonCard = ({pokemon}) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/name/${pokemon.name}`)
    }

  return (
    <Grid xs={6} sm={4} md={2} xl={1} key={pokemon.id}>
        <Card 
            css={{padding: '20px'}} style={{backgroundColor: 'gradient'}}
            isHoverable 
            isPressable
            onClick={ onClick }
        >
            <Card.Body css={{p: 1}}>
                <Card.Image
                    src={pokemon.img}
                    width='100%'
                    height={140}
                    alt='Imagen de Pokemon'
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{pokemon.name}</Text>
                <Text>#{pokemon.id}</Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
