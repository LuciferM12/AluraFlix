import styled from "styled-components";

const BotonEstilizado = styled.input`
    margin-left: 12px;
    border-radius: 5px;
    background-color: transparent;
    color: white;
    font-weight: 500;
    border: solid white 1px;
    padding: 5px;
    min-width: 100px;
    cursor: pointer;
    transition: .3s ease-in;
    &:hover{
        background-color:#8C443E ;
    }

`

const Boton = (props) => {
    return (  
         
        <BotonEstilizado type="button" value={props.titulo} ></BotonEstilizado>
    )
}

export default Boton