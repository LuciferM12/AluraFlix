import styled from "styled-components"
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../../context/GlobalContext";
import CampoTexto from "../CampoTexto";
import Seleccion from "../Seleccion";
import Boton from "../../components/Boton";

const EspacioBotones = styled.div`
width: 100%;
display: flex;
align-items: center;
`

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    padding: 20px;
    border: 0;
    width: 1156px;

    background-color: #0D0D0D;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    
    z-index: 3;
`
const FormularioAbrir = styled.form`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    height: fit-content;
    button {
        background: transparent;
        color: white;
        border: none;
    }
`

const BotonIcono = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 2em;
    cursor: pointer;

`

const FormularioEstilizado = styled.form`
    width: 80%;
    color: white;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 100px;
    h1{
        width: 100%;
    }
    
`

const ModalZoom = () => {
    //const { estaAbiertoModal, fotoSeleccionada, cerrarModal } = useFotoModal();
    const { setTitulo, titulo, setImagen, imagen, setCategoria, categoria, abierto, setAbierto, limpiarEstado } = useContext(GlobalContext);
    const cerrarModal = () => {
        setAbierto(!abierto)
        limpiarEstado()
    }

    return <>
        {abierto && <>
            <Overlay />
            <DialogEstilizado open={true} onClose={() => cerrarModal()}>
                {/*<Imagen foto={fotoSeleccionada} expandida={true} />*/}
                <FormularioAbrir method="dialog">
                    <BotonIcono formMethod="dialog">
                        <IoIosCloseCircle />
                    </BotonIcono>
                </FormularioAbrir>
                <FormularioEstilizado>
                    <h1>
                        Editar una pelicula
                    </h1>
                    <CampoTexto titulo={"Titulo"} value={titulo} estado={setTitulo} required />
                    <CampoTexto titulo={"Imagen"} value={imagen} placeholder={"Ingrese el url de la imagen"} tipo={"url"} estado={setImagen} required />
                    <Seleccion titulo={"Categoria"} value={categoria} estado={setCategoria} />
                    <EspacioBotones>
                        <Boton tipo={"submit"} ></Boton>
                        <Boton tipo={"button"} texto={"Limpiar"} accion={() => limpiarEstado()} ></Boton>
                    </EspacioBotones>
                </FormularioEstilizado>
            </DialogEstilizado>
        </>
        }

    </>
}

export default ModalZoom
