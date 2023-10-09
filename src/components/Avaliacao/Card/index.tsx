import { Rating } from "@mui/material"
import IProfissional from "../../types/iProfissional"
import styled from "styled-components"
import Botao from "../../Botao"
import Subtitulo from "../../Subtitulo"

const ContainerEstilizado=styled.div`
    flex:40%;
    max-width:100%;
    background-color:#ffffff;
    padding:1em;
    box-shadow:2px 2px 8px rgba(0,0,0,0.15);
    border-radius:8px;
    color:var(--cinza);
    margin:1em 2em 1em;

`
const UlEstilizada=styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0;
    width:100%;
    

`
const ListaEstilizada=styled.li`
  list-style-type:none;
   


`
const ImgEstilizada=styled.img`
    width:64px;
    height:64px;
    border:2px solid var(--azul-claro);
    object-fit:cover;
    border-radius:100%;
    margin-right:1em;
`

const FonteP=styled.p`
    font-weight:700;
`
function Card({profissional}:{profissional:IProfissional}){
    return(

        <ContainerEstilizado>
            
            <UlEstilizada>
                <ListaEstilizada>
                    <ImgEstilizada src={profissional.imagem} 
                    alt={`foto de perfil do profissional ${profissional.nome} `}/>
                </ListaEstilizada>
                <ListaEstilizada>
                    <FonteP>{profissional.nome}</FonteP>
                    <FonteP>{profissional.especialidade}</FonteP>
                </ListaEstilizada>
                <ListaEstilizada>
                    <Rating
                    name="simple-controlled"
                    value={profissional.nota}
                    readOnly={true}/>
                </ListaEstilizada>
            </UlEstilizada>
            
        </ContainerEstilizado>

        
    )
}
export default Card