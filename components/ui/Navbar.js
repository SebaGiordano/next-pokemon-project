import React from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'

const { theme } = useTheme

console.log(theme);

export const Navbar = () => {
  return (
    // STYLE ES PARA COMPONENTES NATIVOS DE HTML
    // CSS PARA LOS COMPONENTES PROPIOS DE NEXTUI
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la app"
            width={70}
            height={70}
        />

        <NextLink href="/" passHref>
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemonn!</Text>
          </Link>
        </NextLink>

        <Spacer css={{
            flex: 1
        }}/>


        <NextLink href="/favorites" passHref>
          <Link>
            <Text color='white' h3>Favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}
