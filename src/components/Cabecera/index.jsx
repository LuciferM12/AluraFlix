import styled from "styled-components";
import Boton from "../Boton";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

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
    @media (max-width: 650px){
        justify-content: center;
    }
`

const AreaBotones = styled.div`
    @media (max-width: 650px){
        display: none;
    }
`

const BarraInferior = styled.header`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #0D0D0D;
    display: none;
    z-index: 2;
    border-top: gray .5px solid;
    @media (max-width: 650px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

const BotonInferior = styled.button`
    margin-left: 12px;
    border-radius: 5px;
    background-color: transparent;
    color: white;
    font-weight: 500;
    border: solid white 1px;
    padding: 10px;
    min-width: 100px;
    cursor: pointer;
    transition: .3s ease-in;
    font-family: "Playwrite HR Lijeva", cursive;
    &:hover{
        background-color:#8C443E;
        @media (max-width: 420px){
            background-color: transparent; 
            color: #ecbc64;
        }
    }
    @media (max-width: 420px){
        :nth-child(2){
            display: none;
        }
        font-size: 20px;
        border: none;
    }
`

const Cabecera = () => {
    return (
        <>
            <HeaderEstilizado>
                <Link to={"/"}><h1>AluraFlix</h1></Link>
                <AreaBotones>
                    <Link to={"/"}><Boton tipo={"button"} texto={"Home"} /></Link>
                    <Link to={"/registro"}><Boton tipo={"button"} texto={"Nuevo Video"} /></Link>
                </AreaBotones>
            </HeaderEstilizado>
            <BarraInferior>
                <Link to={"/"}><BotonInferior > <IoHomeSharp /> <span>Home</span> </BotonInferior></Link>
                <Link to={"/registro"}><BotonInferior > <IoIosAddCircle /> <span>Add</span> </BotonInferior></Link>
            </BarraInferior>
        </>
    )
}

export default Cabecera;
