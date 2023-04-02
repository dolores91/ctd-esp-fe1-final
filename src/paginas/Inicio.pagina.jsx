import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
    actionBusqueda,
    getFilter,
    getTarjetas,
    updateFavoritos,
} from '../redux/gallerySlice.ts';
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    //let busqueda = useAppSelector((state) => state.personajes.inputValue);
    const personajes = useAppSelector((state) => state.gallery.tarjetas);
    //const favoritos = useAppSelector((state) => state.personajes.favoritos);
    // const inputRef = useRef(null);
   // const totalPages = useAppSelector(
   //     (state) => state.personajes.metaData.pages
   // );

   useEffect(() => {
    dispatch(getTarjetas(page));
}, [page, dispatch]);


console.log(personajes);




    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes  personajes={personajes} />
        <Paginacion />
    </div>
}

export default PaginaInicio