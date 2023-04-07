import BotonFavorito from '../botones/boton-favorito.componente';
import PropTypes from 'prop-types';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @returns un JSX element 
 */
interface Props {
    name: string;
    image: string;
    onClick: () => void;
    esFavorito: boolean;
};
const TarjetaPersonaje = ({ name, image, onClick, esFavorito }: Props) => {
    return (
        <div className='tarjeta-personaje'>
            <img src={image} alt={name} />
            <div className='tarjeta-personaje-body'>
                <span>{name}</span>
                <BotonFavorito esFavorito={esFavorito} onClick={onClick} />
            </div>
        </div>
    );
};

export default TarjetaPersonaje;

TarjetaPersonaje.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    esFavorito: PropTypes.bool.isRequired
}