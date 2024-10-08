import styled from "styled-components";

const CampoTextoEstilizado = styled.input`
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
        box-shadow: 0 0 5px black; 
    }
`;

const FieldsetEstilizado = styled.fieldset`
    width: 45%;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1024px) {
        width: 90%;
    }
`

const CampoTexto = ({ placeholder, tipo, required, titulo, estado, value }) => {

    const manejarCambio = (e) => {
        estado(e.target.value)
    }
    return (
        <FieldsetEstilizado >
            <span>{titulo}: </span>
            <CampoTextoEstilizado value={value} placeholder={placeholder} type={tipo = "text"} required={required} onChange={manejarCambio} />
        </FieldsetEstilizado>
    )
}

export default CampoTexto