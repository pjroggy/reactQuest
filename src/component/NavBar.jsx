

function NavBar({/*handleClickBack, handleClickNext, pokemonIndex,*/ pokemonList, handleClick}) {

    return (
        <>
        {pokemonList.map((pokemon, index)=> (
            <button key={pokemon.name} onClick={() => handleClick(index)}>{pokemon.name}</button>)
        )}
        </>
    )
}

export default NavBar;



{/* {pokemonIndex > 0 && <button type="button" onClick={handleClickBack}>précédent</button>}
{pokemonIndex < pokemonList.length -1 && <button type="button" onClick={handleClickNext}>suivant</button>} */}

// { pokemonIndex > 0 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>précédent</button>}
// { pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>suivant</button> }