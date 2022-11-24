import React from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'
import { Container, Text } from '@nextui-org/react'

// EN EL WINDOW LOCATION TENEMOS TODO EL PATH QUE OCUPAMOS. PERO SOLO EXISTE SI ESTAMOS TRABAJANDO EN LA OARTE DEL FRONTEND, EN EL BACKEND NO VA A FUNCIONAR
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Sebastian Giordano" />
            <meta name="descripcion" content={ `Informacion sobre el pokemon ${ title }` } />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={ `Esta es la pagina sobre ${title}` } />
            <meta property="og:image" content={`${origin}/img/banner.png`} />

        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px',
          minHeight:"84vh",
          marginTop: '10px'
        }}>
            {children}
        </main>

        <footer
          style={{
            marginTop: '15px', height: '70px'
          }}
        >
          <Container
            fluid
            justify="center" css={{ margintop:"20px", height:"50px", display:"flex", widht:"100%", bgColor:"$gray50", alignItems: 'center' }}
          >     
            <Text color={'white'} h4> Derechos reservados &copy;</Text>
          </Container>

      </footer>
    </>
  )
}
