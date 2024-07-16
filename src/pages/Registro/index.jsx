import styled from "styled-components";
import CampoTexto from "../../components/CampoTexto";
import Seleccion from "../../components/Seleccion";
import Boton from "../../components/Boton";

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
    return (
        <PrincipalEstilizado >
            <h1>NUEVO VIDEO</h1>
            <span>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA</span>
            <FormularioEstilizado>
                <CampoTexto titulo={"Titulo"} placeholder={"Ingrese el titulo"} required />
                <CampoTexto titulo={"Imagen"} placeholder={"Ingrese el url de la imagen"} tipo={"url"} required />
                <CampoTexto titulo={"Horas de duración"} placeholder={"Ingrese la duración en horas"} tipo={"number"} required />
                <CampoTexto titulo={"Minutos de duración"} placeholder={"Ingrese la duración en minutos"} tipo={"number"} required />
                <Seleccion titulo={"Categoria"} />
                <EspacioBotones>
                    <Boton tipo={"submit"} ></Boton>
                    <Boton tipo={"button"} texto={"Limpiar"} ></Boton>
                </EspacioBotones>
            </FormularioEstilizado>
        </PrincipalEstilizado>
    )
}

export default Registro;