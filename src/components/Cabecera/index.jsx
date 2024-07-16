import styled from "styled-components";
import Boton from "../Boton";
const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #192744;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 60px;
    color: #91CFFB;
    box-sizing: border-box;
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <h1>AluraFlix</h1>
        <div>
            <Boton titulo="Home" />
            <Boton titulo="Nuevo Video" />
        </div>

    </HeaderEstilizado>
}

export default Cabecera;
