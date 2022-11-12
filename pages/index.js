import { GetStaticProps } from "next";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonCard } from "../components/pokemon";

const Home = ({pokemons}) => {

  console.log({pokemons});

  return (
    <Layout title='Listado de Pokemons'>

      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map( (pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          )) 
        }
      </Grid.Container>

    </Layout>
  )
}

export default Home

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


// getStaticProps; Los StaticProps son propiedades estaticas que son generadas a la hora de construccion de mi aplicacion cuando yo hago el build de la misma. Cuando estamos enn desarrollo getstaticprops se llama cada vez que le hacemos una solicitud a esta pagina, pero cuando estamos generando el build de produccion solo una vez se va a ejecutar aca. Para nosotros cuando este en produccion la aplicacion, esta pagina va a tener toda esa info de pokemon ya pregenerada del lado del servidor , de manera que cuando se solicite el home ya tiene toda esa data gerenada en el servidor y no tiene que volver a hacer la peticion.... El GETSTATICPROPS solo corre del lado del servidor

export const getStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get('/pokemon?limit=151')

  console.log(data)

  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`)
  }) )
  
  

  return {
    props: {
      pokemons
    }
  }
}
