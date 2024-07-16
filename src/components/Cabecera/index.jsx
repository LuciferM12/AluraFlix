import styled from "styled-components";
import Boton from "../Boton";
const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #0D0D0D;
    width: 100%;
    height: 70px;
    align-items: center;
    padding: 0 60px;
    color: #D9C39A;
    box-sizing: border-box;
    font-family: "Playwrite HR Lijeva", cursive;
    position: sticky;
    z-index: 1;
    top: 0;
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
