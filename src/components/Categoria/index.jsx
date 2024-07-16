import styled from "styled-components";
import Card from "../Card";

const CategoriaEstilizada = styled.div`
    width: 100%;
    background-color: #40010D ;
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
    justify-content: flex-start;
    padding: 10px;
    box-sizing: border-box;
`

const Titulo = styled.div`
    margin: 10px;
    width: 100%;
`
const TituloCategoria = styled.div`
    background-color: #0D0D0D;
    color: white;
    font-weight: 500;
    width: fit-content;
    padding: 10px;
    border-radius: 6px;
    font-family: "Playwrite HR Lijeva", cursive;
    box-shadow: -11px 12px 55px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: -11px 12px 55px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -11px 12px 55px -2px rgba(0,0,0,0.75);
`

const Categoria = ({ peliculas, categoria, eliminarPelicula }) => {
    return (
        <>
            <CategoriaEstilizada>
                <Titulo>
                    <TituloCategoria>
                        {categoria}
                    </TituloCategoria>
                </Titulo>
                {
                    peliculas.map((pelicula) => {
                        return <Card {...pelicula} key={pelicula.id} eliminarPelicula={eliminarPelicula}/>;
                    })
                }
            </CategoriaEstilizada>
        </>
    )

}

export default Categoria