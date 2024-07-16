import styled from "styled-components";
import Boton from "../Boton";
import { Link } from "react-router-dom";

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
    a {
    text-decoration: none;
    color: inherit;
  }

`

const Cabecera = () => {
    return <HeaderEstilizado>
        <Link to={"/"}><h1>AluraFlix</h1></Link>
        <div>
            <Link to={"/"}><Boton tipo={"button"} texto={"Home"} /></Link>
            <Link to={"/registro"}><Boton tipo={"button"} texto={"Nuevo Video"} /></Link>
        </div>

    </HeaderEstilizado>
}

export default Cabecera;
