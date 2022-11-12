
//GRABAR EN LOCALSTORAGE UN ARREGLO DE POKEMONS
const toggleFavorite = (id) => {

    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id)
    }else{
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

//FUNCION PARA CHEQUEAR SI EXISTE ALGUN POKEMON EN FAVORITOS
const existInFavorites = (id) => {

    if (typeof window === 'undefined') return false

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)
}

const pokemons = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}


export default{
    existInFavorites,
    toggleFavorite,
    pokemons,
}