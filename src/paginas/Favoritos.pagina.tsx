import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { guardarFavoritos, borrarFavoritos } from '../redux/gallerySlice';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */

const PaginaFavoritos = () => {
    const dispatch = useAppDispatch();
    const personajes = useAppSelector((state) => state.gallery.tarjetas);
    const favoritos = useAppSelector((state) => state.gallery.favoritos);

    //-----------------favoritos
    const onFavorite = (id: number) => {
        const isId = favoritos.some((favorito) => favorito === id);
        if (isId) {
            const updateId = favoritos.filter((favorito) => favorito !== id);
            dispatch(guardarFavoritos(updateId));
        } else {
            dispatch(guardarFavoritos([...favoritos, id]));
        }
    };
    //console.log(personajes);
    const personajesFiltrados = personajes.filter(personajes => favoritos.includes(personajes.id));
    //console.log(personajesFiltrados);


    const handleClickfav = () => {
        dispatch(borrarFavoritos())
    }
//console.log(personajesFiltrados.length);

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger"
                onClick={handleClickfav}>Eliminar todos
            </button>
        </div>
        {personajesFiltrados.length !==0 ? <GrillaPersonajes
            personajes={personajesFiltrados}
            onClick={onFavorite}
            favoritos={favoritos} /> :<h5 className="h5-fav">Prueba seleccionando tus favoritos</h5>}
       
    </div>
}

export default PaginaFavoritos