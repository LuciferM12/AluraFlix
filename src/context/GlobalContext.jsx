import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {
    const [peliculas, setPeliculas] = useState([]);
    const categoriasUnicas = ["Animación", "Superhéroes", "Drama", "Romance"];
    //Formulario agregar
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [abierto, setAbierto] = useState(false);
    const [peliculaAbierta, setPeliculaAbierta] = useState()

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

    const abrirModal = (id) => {
        const pelicula = peliculas.filter((pelicula) => pelicula.id === id)
        console.log(pelicula[0].categoria);
        setTitulo(pelicula[0].titulo)
        setImagen(pelicula[0].imagen)
        setCategoria(pelicula[0].categoria)
        setAbierto(true)
        setPeliculaAbierta(id)
    }

    const editarPelicula = () => {
        const nuevasPeliculas = peliculas.map((pelicula) =>
            pelicula.id === peliculaAbierta ? {
                ...pelicula,
                titulo: titulo,
                imagen: imagen,
                categoria: categoria
            } : pelicula
        );
        setPeliculas(nuevasPeliculas);
        setAbierto(!abierto)
        limpiarEstado();
        setPeliculaAbierta(null)
    }

    const limpiarEstado = () => {
        setTitulo("")
        setImagen("")
        setHoras(0)
        setMinutos(0)
        setCategoria("")
    }

    const agregarPelicula = (pelicula) => {
        setPeliculas([...peliculas, pelicula])
        limpiarEstado()
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
            agregarPelicula,
            abrirModal,
            setAbierto,
            abierto,
            limpiarEstado,
            editarPelicula,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;