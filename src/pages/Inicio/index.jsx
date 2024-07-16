import Cine from './cine.jpg'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import Categoria from '../../components/Categoria'
import { useEffect, useState } from 'react'


const FondoEstilizado = styled.section`
    background-color: #40010D;
    display: flex;
`

const Inicio = () => {
    const [peliculas, setPeliculas] = useState([]);
    const categoriasUnicas = ["Animación", "Superhéroes", "Drama"];

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
        <>
            <Banner backgroundImage={Cine} />
            {
                categoriasUnicas.map((categoria, index) => {
                    const peliCat = peliculas.filter(pelicula => pelicula.categoria === categoria)
                    return (
                        peliCat.length > 0 && <Categoria peliculas={peliCat} categoria={categoria} key={index} eliminarPelicula={eliminarPelicula} />
                    )
                })
            }
            <FondoEstilizado>
            </FondoEstilizado>
        </>
    );


}

export default Inicio