import './tarjeta-episodio.css';
import { FC } from "react";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje. * 
 * @returns un JSX element 
 */


const TarjetaEpisodio: FC = () => {

    return <div className="tarjeta-episodio">
        <h4>Close Rick-counters of the Rick Kind</h4>
        <div>
            <span>S01E01</span>
            <span>Lanzado el: April 7, 2014</span>
        </div>
    </div>
}

export default TarjetaEpisodio;