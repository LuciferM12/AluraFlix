import styled from "styled-components";
import Card from "../Card";

const CategoriaEstilizada = styled.div`
    width: 100%;
    background-color: #BF8A6B ;
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
    justify-content: space-evenly;
    padding: 10px;
    box-sizing: border-box;
`

const Titulo = styled.div`
    margin: 10px;
    width: 100%;
`
const TituloCategoria = styled.div`
    background-color: #8C443E;
    width: fit-content;
    padding: 10px;
    border-radius: 6px;
    font-family: "Playwrite HR Lijeva", cursive;
    box-shadow: -11px 12px 55px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: -11px 12px 55px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -11px 12px 55px -2px rgba(0,0,0,0.75);
`

const Categoria = ({ peliculas, categoria }) => {
    return (
        <>
            <CategoriaEstilizada>
                <Titulo>
                    <TituloCategoria>
                        {categoria}
                    </TituloCategoria>
                </Titulo>
                {
                    peliculas.filter(pelicula => pelicula.categoria === categoria).map((pelicula) => {
                        return <Card {...pelicula} key={pelicula.id} />;
                    })
                }

                {/*<img src='https://www.lahiguera.net/cinemania/pelicula/11073/gru_4_mi_villano_favorito-cartel-11857.jpg' />*/}
            </CategoriaEstilizada>
        </>
    )

}

export default Categoria