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
const GrillaPersonajes = ({ personajes, onclick }) => {
  //console.log(personajes);
  return (
      <div className='grilla-personajes'>
          {personajes?.map((personaje) => (
              <TarjetaPersonaje
                  key={personaje.id}
                  name={personaje.name}
                  image={personaje.image}
                  onclick={() => onclick(personaje.id)}
                  esFavorito={false}
              />
          ))}
      </div>
  );
};

export default GrillaPersonajes;