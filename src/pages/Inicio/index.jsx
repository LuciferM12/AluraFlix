import Cine from './cine.jpg'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import Categoria from '../../components/Categoria'
import { useEffect, useState } from 'react'


const FondoEstilizado = styled.section`
    background-color: #40010D;
    min-height: 90vh;
    display: flex;
`


const Inicio = () => {
    const [peliculas, setPeliculas] = useState([]);
    const categoriasUnicas = ["Animación", "Superhéroes", "Drama"];
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/LuciferM12/aluraflix-api/peliculas")
            .then((response) => response.json())
            .then((data) => {
                setPeliculas(data);
                //setLoading(false); // Indica que los datos han sido cargados
            });
    }, []);

    return (
        <>
            <Banner backgroundImage={Cine} />
            {
                categoriasUnicas.map((categoria, index) =>{
                    return <Categoria peliculas={peliculas} categoria={categoria} key={index} />
                })
            }
            
            <FondoEstilizado>
            </FondoEstilizado>
        </>
    );
}

export default Inicio