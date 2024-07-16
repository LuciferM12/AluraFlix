import styled from "styled-components";

const ListaOpcionesEstilizada = styled.select`
    background-color: transparent;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    color: #D9C39A;
    border: 1px solid gray; /* Añade un borde inicial */
    outline: none; /* Elimina el borde predeterminado del navegador */
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    
    &:focus {
        border: 1px solid #D9C39A; /* Ajusta el borde al enfocarse */
        box-shadow: 0 0 5px black; /* Añade una sombra roja al enfocarse */
    }
`

const FieldsetEstilizado = styled.fieldset`
    width: 45%;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Seleccion = ({ titulo }) => {
    return (
        <FieldsetEstilizado>
            <span>{titulo}: </span>
            <ListaOpcionesEstilizada></ListaOpcionesEstilizada>
        </FieldsetEstilizado>
    )
}

export default Seleccion