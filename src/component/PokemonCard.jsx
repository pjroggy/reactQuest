import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

    return <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
}

PokemonCard.prototype = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired,
    }).isRequired,
}
export default PokemonCard;