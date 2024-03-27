
import './App.css'
import Avatar from './component/Avatar';
import PokemonCard from './component/PokemonCard'


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
const pokemon = { name: "mew" };
function App() {
  return (
    <>
      <section>
        <PokemonCard pokemon={pokemonList[0]} />
      </section>
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
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
    firstName: "Homer",
    lastName: "Simpson"
  }
]


export default App
