import './filtros.css';
import { useAppDispatch } from '../../redux/hooks';
import { getFilter } from '../../redux/gallerySlice';
import { useRef } from "react"

const Filtros = ({ inputRef }) => {

  const dispatch = useAppDispatch();
  return <div className="filtros">
    <label for="nombre">Filtrar por nombre:</label>
    <input type="text"
      placeholder="Rick, Morty, Beth, Alien, ...etc"
      name="nombre"
      onChange={(e) => dispatch((getFilter(e.target.value)))}
      ref={inputRef}
    />
  </div>
}

export default Filtros;