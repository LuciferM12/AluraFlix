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

const Card = () => {
    return (
        <CartaEstilizada>
            <ImagenEstilizada src="https://www.lahiguera.net/cinemania/pelicula/11073/gru_4_mi_villano_favorito-cartel-11857.jpg" alt="Minions" />
            <Informacion>
                <p>Mi villano Favorito 4 </p>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <IoMdTime />
                    <span>1hr</span>
                </span>
            </Informacion>
            <Barra>
                <Botones>
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