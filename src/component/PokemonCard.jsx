import PropTypes from "prop-types";
import styles from "./PokemonCard.module.css";
import "./style.scss";

function PokemonCard({pokemon}) {

    return <figure className={styles.card}>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.cardImg}/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired,
    }).isRequired,
}
export default PokemonCard;