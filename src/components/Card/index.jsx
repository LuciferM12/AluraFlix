import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const CartaEstilizada = styled.div`
    min-height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color:#0D0D0D;
    border-radius: 10px;
    color: white;
    transition: .2s ease-in;
    &:hover{
        transform: scale(.95);
    }
 `

const ImagenEstilizada = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`
const Informacion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    align-items: center;
    box-sizing: border-box;
    line-height: 0;
    padding: 5px;
    gap: 20px;
    justify-content: center;
    p{
        font-family: "Montserrat", sans-serif;
        display: block;
        gap: 5px;
        width: 90%;
        line-height: 1;
        margin: 0px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
    }
    span{
        font-family: "Montserrat", sans-serif;
    }
`

const Barra = styled.div`
    background-color:#212121 ;
    height: 50px;
    width: 100%;
    border-end-end-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: space-evenly;
`

const Botones = styled.button`
    font-size: 1.2em;
    color: white;
    width: 45%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    &:hover{
        cursor: pointer;
    }
`

const Card = ({ titulo, duracion, imagen, eliminarPelicula, id }) => {
    return (
        <CartaEstilizada>
            <ImagenEstilizada src={imagen} alt={titulo} />
            <Informacion>
                <p>{titulo}</p>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <IoMdTime />
                    <span>{duracion}</span>
                </span>
            </Informacion>
            <Barra>
                <Botones onClick={() => eliminarPelicula(id)}>
                    <MdDeleteForever />Eliminar
                </Botones>
                <Botones>
                    <FaEdit />Editar
                </Botones>
            </Barra>
        </CartaEstilizada>
    )

}

export default Card