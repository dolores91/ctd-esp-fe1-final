import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Tarjeta } from "../../redux/gallerySlice";
import PropTypes from 'prop-types';
/**
 * Grilla de personajes para la pagina de inicio
 * @returns un JSX element 
 */
interface Props {
    personajes: Tarjeta[];
    onClick: (id: number) => void;
    favoritos: number[];
}
const GrillaPersonajes= ({ personajes, onClick, favoritos }: Props) => {
    //console.log(personajes);
    return (
        <div className='grilla-personajes'>
            {personajes?.map((personaje) => (
                <TarjetaPersonaje
                    key={personaje.id}
                    name={personaje.name}
                    image={personaje.image}
                    onClick={() => onClick(personaje.id)}
                    esFavorito={favoritos.some(
                        (favorito) => favorito === personaje.id
                    )}
                />
            ))}
        </div>
    );
};

export default GrillaPersonajes;
GrillaPersonajes.protoType ={
    personajes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    favoritos: PropTypes.object.isRequired
}