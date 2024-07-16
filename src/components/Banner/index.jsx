import styled from "styled-components";

const BannerEstilizado = styled.div`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    margin: 0px;
    background-size: cover;
    max-width: 100%;
    min-height: 328px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`

const Banner = ({ backgroundImage }) => {
    return (
        <BannerEstilizado $backgroundImage={backgroundImage} />
    )
}

export default Banner