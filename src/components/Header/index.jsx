import styled from "styled-components";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: gray;
    width: 100%;
    height: 50px;
`

const Header = () =>{
    return <HeaderEstilizado>
        Hola mundo
    </HeaderEstilizado>
}

export default Header;
