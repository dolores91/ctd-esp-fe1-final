import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getFilter, getTarjetas, guardarFavoritos } from '../redux/gallerySlice.ts';

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const [page, setPage] = useState(2);
    const dispatch = useAppDispatch();
    const personajes = useAppSelector((state) => state.gallery.tarjetas);
    const name = useAppSelector((state) => state.gallery.name);
    const inputRef = useRef(null);
    const favoritos = useAppSelector((state) => state.gallery.favoritos);

    //const favoritos = useAppSelector((state) => state.personajes.favoritos);

    useEffect(() => {
        dispatch(getTarjetas(page));
        dispatch(getFilter(name))
    }, [page, dispatch, name]);
    //console.log("filtro:",filtro);
    //console.log(name);

    //console.log("personajes:", personajes);
    console.log("favoritos:", favoritos);


    //Paginación
    const previous = () => {
        setPage((page) => page - 1);
    };
    const next = () => {
        setPage((page) => page + 1);
    };
    //limpiar filtro
    const handleClickLimpiar = () => {
        dispatch(getTarjetas(page))
        inputRef.current.value = '';
    }
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

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger"
                onClick={handleClickLimpiar}>Limpiar filtros</button>
        </div>
        <Filtros
            inputRef={inputRef}
        />
        <Paginacion
            onPrevious={previous}
            onNext={next} />
        <GrillaPersonajes
            personajes={personajes}
            onclick={onFavorite}
            favoritos={favoritos} />
        <Paginacion
            onPrevious={previous}
            onNext={next} />
    </div>
}

export default PaginaInicio