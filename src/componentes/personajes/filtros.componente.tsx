import './filtros.css';
import { useAppDispatch } from '../../redux/hooks';
import { getFilter } from '../../redux/gallerySlice';
import React, { FC, RefObject } from 'react';

interface FiltrosProps {
  inputRef: RefObject<HTMLInputElement>;
}

const Filtros: FC<FiltrosProps> = ({ inputRef }) => {

  const dispatch = useAppDispatch();
  return <div className="filtros">
    <label htmlFor="nombre">Filtrar por nombre:</label>
    <input type="text"
      placeholder="Rick, Morty, Beth, Alien, ...etc"
      name="nombre"
      onChange={(e) => dispatch((getFilter(e.target.value)))}
      ref={inputRef}
    />
  </div>
}

export default Filtros;