import Cine from './cine.jpg'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import Categoria from '../../components/Categoria'

const FondoEstilizado = styled.section`
    background-color: #40010D;
    min-height: 90vh;
    display: flex;
`


const Inicio = () =>{
    return(
        <>
        <Banner backgroundImage={Cine} />
        <Categoria/>
        <FondoEstilizado>
            
        </FondoEstilizado>
        
        </>
        
    )
}

export default Inicio