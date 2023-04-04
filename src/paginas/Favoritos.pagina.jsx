import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {  guardarFavoritos } from '../redux/gallerySlice.ts';


/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch();
    const personajes = useAppSelector((state) => state.gallery.tarjetas);
    const favoritos = useAppSelector((state) => state.gallery.favoritos);

 //favoritos
 const onFavorite= (id) => {
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
console.log(personajesFiltrados);

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Eliminar todos</button>
        </div>
        <GrillaPersonajes
         personajes={personajesFiltrados}
            onclick={onFavorite}
            favoritos={favoritos} />
    </div>
}

export default PaginaFavoritos