import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();


const  GlobalContextProvider = ({ children }) =>{
    const [peliculas, setPeliculas] = useState([]);
    const categoriasUnicas = ["Animación", "Superhéroes", "Drama", "Romance"];
    //Formulario agregar
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [categoria, setCategoria] = useState(""); 
    const navigate = useNavigate();

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

    const agregarPelicula = (pelicula) =>{
        setPeliculas([...peliculas, pelicula])
        navigate('/');
    }
    
    return (
        <GlobalContext.Provider value={{
            peliculas, 
            setPeliculas, 
            eliminarPelicula, 
            categoriasUnicas,
            titulo,
            setTitulo,
            setImagen,
            imagen,
            setHoras,
            horas,
            setMinutos,
            minutos,
            setCategoria,
            categoria,
            agregarPelicula
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;