import styled from "styled-components";
import CampoTexto from "../../components/CampoTexto";
import Seleccion from "../../components/Seleccion";
import Boton from "../../components/Boton";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../../context/GlobalContext";

const PrincipalEstilizado = styled.main`
    width: 100%;
    display: flex;
    background-color: #40010D;
    min-height: 86vh;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    box-sizing: border-box;
    color: #D9C39A;
    font-family: "Montserrat", sans-serif;
    gap: 20px;
`

const FormularioEstilizado = styled.form`
    width: 80%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`
 const EspacioBotones = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
 `

const Registro = () => {
    const {setTitulo, titulo, setImagen, imagen, setHoras, horas, setMinutos, minutos, setCategoria, categoria, agregarPelicula} = useContext(GlobalContext);
    const duracion = `${horas}h ${minutos}min`
    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            id : uuid(),
            titulo,
            imagen,
            duracion,
            categoria
        }
        agregarPelicula(datosAEnviar);
    }
    return (
        <PrincipalEstilizado >
            <h1>NUEVO VIDEO</h1>
            <span>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA</span>
            <FormularioEstilizado onSubmit={manejarEnvio}>
                <CampoTexto titulo={"Titulo"} placeholder={"Ingrese el titulo"} estado={setTitulo} required />
                <CampoTexto titulo={"Imagen"} placeholder={"Ingrese el url de la imagen"} tipo={"url"} estado={setImagen} required />
                <CampoTexto titulo={"Horas de duración"} placeholder={"Ingrese la duración en horas"} tipo={"number"} estado={setHoras} required />
                <CampoTexto titulo={"Minutos de duración"} placeholder={"Ingrese la duración en minutos"} tipo={"number"} estado={setMinutos} required />
                <Seleccion titulo={"Categoria"} estado={setCategoria}/>
                <EspacioBotones>
                    <Boton tipo={"submit"} ></Boton>
                    <Boton tipo={"button"} texto={"Limpiar"} ></Boton>
                </EspacioBotones>
            </FormularioEstilizado>
        </PrincipalEstilizado>
    )
}

export default Registro;