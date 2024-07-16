import Cine from './cine.jpg'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import Categoria from '../../components/Categoria'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from 'react'
import ModalZoom from '../../components/ModalZoom'


const FondoEstilizado = styled.section`
    background-color: #40010D;
    display: flex;
`

const Inicio = () => {
    const {peliculas, categoriasUnicas, eliminarPelicula, abrirModal} = useContext(GlobalContext);
    return (
        <>
            <Banner backgroundImage={Cine} />
            {
                categoriasUnicas.map((categoria, index) => {
                    const peliCat = peliculas.filter(pelicula => pelicula.categoria === categoria)
                    return (
                        peliCat.length > 0 && <Categoria peliculas={peliCat} categoria={categoria} key={index} eliminarPelicula={eliminarPelicula} abrirModal={abrirModal}/>
                    )
                })
            }
            <FondoEstilizado/>
            <ModalZoom/>
        </>
    );


}

export default Inicio