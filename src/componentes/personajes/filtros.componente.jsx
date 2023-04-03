import './filtros.css';
import { useAppDispatch } from '../../redux/hooks';
import { getFilter } from '../../redux/gallerySlice';

const Filtros = () => {
   
  const dispatch = useAppDispatch();
    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" 
        placeholder="Rick, Morty, Beth, Alien, ...etc" 
        name="nombre" 
        onChange={(e) => dispatch((getFilter(e.target.value)))}
        />
    </div>
}

export default Filtros;