import styled from "styled-components";

const BotonEstilizado = styled.input`
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
        background-color:#8C443E ;
    }

`

const Boton = ({tipo, texto}) => {
    return (  
         
        <BotonEstilizado type={tipo} value={texto} ></BotonEstilizado>
    )
}

export default Boton