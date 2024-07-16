import { createContext, useState, useEffect } from "react";



export const GlobalContext = createContext();

const  GlobalContextProvider = ({ children }) =>{
    const [peliculas, setPeliculas] = useState([]);
    const categoriasUnicas = ["Animación", "Superhéroes", "Drama", "Romance"];

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/LuciferM12/aluraflix-api/peliculas")
            .then((response) => response.json())
            .then((data) => {
                setPeliculas(data);
            });
    }, []);

    const eliminarPelicula = (id) => {
        const nuevasPeliculas = peliculas.filter((pelicula) => pelicula.id != id)
        setPeliculas(nuevasPeliculas)
    }
    
    
    return (
        <GlobalContext.Provider value={{peliculas, setPeliculas, eliminarPelicula, categoriasUnicas}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;