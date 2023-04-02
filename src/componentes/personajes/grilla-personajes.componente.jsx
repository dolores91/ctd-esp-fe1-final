import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './../../redux/hooks'
import { getTarjetas } from "../../redux/gallerySlice"
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
  const gallery = useAppSelector(state => state.gallery)

  useEffect(() => {
    dispatch(getTarjetas(page))
  }, [page])

  console.log(gallery);
  return <div className="grilla-personajes">
    <TarjetaPersonaje />
   {/*} {gallery?.map((tarjeta) => (
      <TarjetaPersonaje
        name={tarjeta.name}
        image={tarjeta.image}
      />
    ))}*/}
  </div>
}

export default GrillaPersonajes;