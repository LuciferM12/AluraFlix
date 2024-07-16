import styled from "styled-components";

const BotonEstilizado = styled.input`
    margin-left: 12px;
    border-radius: 5px;
    background-color: #D31775;
    color: white;
    font-weight: 500;
    border: none;
    padding: 5px;
    width: 100px;
    cursor: pointer;
    transition: .3s ease-in;
    &:hover{
        background-color:#82266F ;
    }

`

const Boton = (props) => {
    return (  
         
        <BotonEstilizado type="button" value={props.titulo} ></BotonEstilizado>
    )
}

export default Boton