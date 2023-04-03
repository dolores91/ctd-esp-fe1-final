import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from 'react';
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
    const [page, setPage] = useState(5);
    const dispatch = useAppDispatch();
    //let busqueda = useAppSelector((state) => state.personajes.inputValue);
    const personajes = useAppSelector((state) => state.gallery.tarjetas);
    const name = useAppSelector((state) => state.gallery.name);
    //const filtro = useAppSelector((state) => state.gallery);

    //const favoritos = useAppSelector((state) => state.personajes.favoritos);

    // const totalPages = useAppSelector(
    //     (state) => state.personajes.metaData.pages
    // );

    useEffect(() => {
        dispatch(getTarjetas(page));
        dispatch(getFilter(name))
    }, [page, dispatch, name]);
    //console.log("filtro:",filtro);
    //console.log(name);

    //console.log("personajes:", personajes);


    //funciones de paginación
    const previous = () => {
        setPage((page) => page - 1);
    };
    const next = () => {
        setPage((page) => page + 1);
    };


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros

        />
        <Paginacion onPrevious={previous}
            onNext={next} />
        <GrillaPersonajes personajes={personajes} />
        <Paginacion onPrevious={previous}
            onNext={next} />
    </div>
}

export default PaginaInicio