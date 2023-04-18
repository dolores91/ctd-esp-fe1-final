# ctd-esp-fe1-final

## **Practica aplicando REACT, Redux, TypeScript, Thunk, JSdoc**


[Link al vide](https://drive.google.com/file/d/1frDED-S1tIpGXrHx8z6CfugjHmljWsEQ/view)


## Funcionalidades


* La aplicación deberá contar con dos páginas:

  1 - La página de inicio que debe contar con:

          * Panel de filtros:
            * Contendrá un input en donde el usuario pueda ingresar cualquier texto que desee para hacer un filtro sobre los personajes.
            * Si el usuario borra el texto ingresado, se deberá mostrar el estado inicial, es decir la búsqueda sin filtro.
            * Se deberá incluir un boton de "Limpiar filtros", el cual deberá borrar el texto dentro del input y mostrar el estado inicial, es decir la búsqueda sin filtro.

          * Listado de personajes
            * Deberá mostrar los personajes, que estarán representados por tarjetas con información sobre cada uno de ellos.
            * Como máximo se deben mostrar en pantalla 20 tarjetas de personajes por página.
            * Se deberá poder marcar y desmarcar a cada personaje como favorito desde su tarjeta individual, teniendo que persistir ese estado en la aplicación.
            * Se deberá poder diferenciar si un personaje se encuentra marcado como favorito o no.

  2 - La página de favoritos que deberá cumplir con los siguientes requisitos:

            *  Todos los personaje marcados como favoritos, deberán aparecer dentro del listado de favoritos en la segunda página de la aplicación.
            *  Si el usuario desmarca un personaje como favorito el mismo deberá desaparecer del listado de favoritos.
            *  Un personaje que haya sido desmarcado de los favoritos, podrá ser marcado nuevamente desde la pantalla de inicio y deberá aparecer en el listado otra vez.
    

### Funcionalidades extras


    * La página de favoritos:
      * Podrá contar con un botón de "Eliminar todos", que deberá desmarcar todos los personajes del listado de favoritos y los mismos no deberán aparecer marcados como favoritos en la página principal.

    * Realización de una tercer página de vista de cada personaje:
    Al hacer click sobre un personaje deberá redirigirnos a está página.
        * Va a requerir de la invocación de la API de [Episodios](https://rickandmortyapi.com/documentation/#get-multiple-episodes) de Rick and Morty.
        * Dentro de la vista de cada personaje:
           * Se mostrará un listado de los episodios en los cuales aparece.
           * También podríamos indicar si el personaje está marcado como favorito o no, y junto con la posibilidad de marcarlo o desmarcarlo.


