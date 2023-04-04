import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente

/**
 * Componente BotonFavorito
 *
 * Este componente muestra un botón de favorito que puede ser marcado o desmarcado
 * según su estado actual.
 *
 * @param {Object} props - Las props del componente.
 * @param {boolean} props.esFavorito - Indica si el botón está marcado como favorito.
 * @param {Function} props.onClick - La función que se ejecuta al hacer clic en el botón.
 * @author Dolores aleman
 * @returns {JSX.Element} - El elemento JSX que representa el componente.
 */

//a este tipado lo agregue yo, ver si esta bien o si solo habia q documentar..!!
type BotonFavoritoProps = {
    esFavorito: boolean;
    onClick: () => void;  
  }


const BotonFavorito = ({esFavorito, onClick}: BotonFavoritoProps) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div> 
}

export default BotonFavorito;
  