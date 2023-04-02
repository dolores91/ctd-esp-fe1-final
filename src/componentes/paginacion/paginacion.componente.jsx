import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({onPrevious, onNext}) => {

    return <div className="paginacion">
        <button disabled={false} className={"primary"}  onClick={onPrevious} >Anterior</button>
        <button disabled={false} className={"primary"} onClick={onNext} >Siguiente</button>
    </div>
}

export default Paginacion;