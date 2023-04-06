import './boton-favorito.css';
/**
 * Componente BotonFavorito
 *
 * Este componente muestra un botón de favorito que puede ser marcado o desmarcado
 * según su estado actual.
 *
 * @param {boolean} props.esFavorito - Indica si el botón está marcado como favorito.
 * @param {Function} props.onClick - La función que se ejecuta al hacer clic en el botón.
 * @author Dolores aleman
 * @returns {JSX.Element} - El elemento JSX que representa el componente.
 */

interface Props {
    esFavorito: boolean;
    onClick: () => void;
}

const BotonFavorito = ({ esFavorito, onClick }:Props) =>  {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;
