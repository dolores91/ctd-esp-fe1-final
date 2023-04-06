import './paginacion.css';
import React, { FC, MouseEventHandler } from 'react';

/**
 * Componente que contiene los botones para paginar
 * @returns un JSX element 
 */

interface Props {
    onPrevious: MouseEventHandler<HTMLButtonElement>;
    onNext: MouseEventHandler<HTMLButtonElement>;
}

const Paginacion = ({ onPrevious, onNext }: Props) => {

    return <div className="paginacion">
        <button disabled={false} className={"primary"} onClick={onPrevious} >Anterior</button>
        <button disabled={false} className={"primary"} onClick={onNext} >Siguiente</button>
    </div>
}

export default Paginacion;