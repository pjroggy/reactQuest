
import './App.css'
import Avatar from './component/Avatar';
import PokemonCard from './component/PokemonCard'
import { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
const pokemon = { name: "mew" };
function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <>
      {pokemonIndex > 0 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>précédent</button>}
      <section>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </section>
      {pokemonIndex < pokemonList.length -1 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>suivant</button>}
      <section>
        {simpsons.map(simpson => <Avatar
          image={simpson.image}
          firstName={simpson.firstName}
          lastName={simpson.lastName} />)}
        {/* <Avatar
          image={bart.image}
          firstName={bart.firstName}
          lastName={bart.lastName} />
        <Avatar
          image={homer.image}
          firstName={homer.firstName}
          lastName={homer.lastName} /> */}
      </section>
    </>
  )
}

// const bart = {
//   image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
//   firstName: "Bart",
//   lastName: "Simpson"
// };
// const homer = {
//   image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
//   firstName: "Homer",
//   lastName: "Simpson"
// };

const simpsons = [
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
    firstName: "Marg",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
    firstName: "Maggie",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    firstName: "Lisa",
    lastName: "Simpson"
  },

]


export default App
