import styled from "styled-components"
import avaliacao from "../assets/avaliacao.png"
import consulta from "../assets/consulta.png"
import grafico from "../assets/grafico.png"

interface Props{
    imagem?:string,
    children?:React.ReactNode
}
interface IImagens{
    avaliacao:string,
    grafico:string,
    consulta:string
}

 const SapnEstilizado=styled.span<Props>`
    background-repeat:no-repeat;
    background-position: center;
    background-size:center;
    width:25px;
    height:25px;
    backgorund-image: ${props=>props.imagem ? `url(${props.imagem})`: 'none'}

`
const TituloEstilizado=styled.h2`
    color:var(--azul-claro);
`

const ContainerEstilizado=styled.div`
    display:flex;
    align-items:center;
`

function Titulo({imagem,children}:Props){
    const listaDeImagens: IImagens={
        avaliacao:avaliacao,
        grafico:grafico,
        consulta:consulta
    }
    return (
        <ContainerEstilizado>
            {imagem &&<SapnEstilizado imagem={listaDeImagens[imagem as keyof IImagens]}/>}
            <TituloEstilizado>{children}</TituloEstilizado>
            
        </ContainerEstilizado>
    )
}
export default Titulo;