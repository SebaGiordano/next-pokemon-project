import React, { useState } from 'react'

import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Spacer, Text, useTheme, Link, Backdrop, Input } from '@nextui-org/react'
import { SearchIcon } from './SearchIcon';


export const Navbar = () => {

  const { theme } = useTheme();
  
  //console.log(theme);

  const id= Math.floor(Math.random()*100+1);
  const [searchItens, setSearchItens] = useState('')
  const router = useRouter()

  const onSearchTerns = () => {
    if(searchItens.trim().lenght === 0) return;
    router.push(`/search/${searchItens}`)
  }

  return (
    // STYLE ES PARA COMPONENTES NATIVOS DE HTML
    // CSS PARA LOS COMPONENTES PROPIOS DE NEXTUI
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '1px 20px',
        position:"sticky", top:0, left:0, zIndex:1000,
        //backgroundColor: 'gradient'
        backgroundColor:theme?.colors.gray50.value,
        //Backdrop: '10px',
        //boxShadow: 'transparent',
        //border: '1px',
        
    }}>

        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }
            alt="Icono de la app"
            width={70}
            height={70}
        />

        <NextLink href="/" passHref>
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Link>
        </NextLink>

        <Spacer css={{
            flex: 1
        }}/>

        
        <Input
            clearable
            contentLeft={
              <SearchIcon 
                fill='var(--nextui-colors-accents6)' 
                size={16} 
                onClick={onSearchTerns} 
                style = {{cursor: 'pointer'}}
              />
            }
        
            contentLeftStyling={false}
            placeholder = 'Ingrese un Pokemon...'
            css={{border: '1px'}}

            //onKeyDown = {(e) => (e.key='Enter' ? onSearchTerns() : null)} 
            value = {searchItens}
            onChange= { (e) => setSearchItens(e.target.value) }
        />

        <NextLink href="/favorites" passHref>
          <Link css={{marginLeft: '15px'}}>
            <Text color='white' h3>Favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}

{/* <Navbar isBordered naxHidth='fluid' variant='sticky'> 
      <Navbar.Brand>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }
          alt="Icono de la app"
          width={70}
          height={70}
        />
        
        <NextLink href="/" passHref>
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Link>
        </NextLink>

      </Navbar.Brand>

      <Spacer css={{
           flex: 1
      }}/>

      <Navbar.Content>
        <Navbar.Item>
          <Input
            clearable
            contentLeft={
              <SearchIcon fill='var(--nextui-colors-accents6)' size={16}/>
            }
            contentLeftStyling={false}
          />

        </Navbar.Item>

        
      </Navbar.Content>

    </Navbar> */}
