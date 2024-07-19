import styled from "styled-components";

const FooterEstilizado = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #0D0D0D;
    color: #D9C39A;
    font-family: "Playwrite HR Lijeva", cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 650px){
        margin-bottom: 70px;
    }
    
`

const Footer = () => {
    return (
        <FooterEstilizado>
            <h1>AluraFlix</h1>
        </FooterEstilizado>
    )
}

export default Footer