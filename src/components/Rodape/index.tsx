import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whattsapp from "../assets/whatsapp.png";
import google from "../assets/google.png";
import styled from "styled-components";

const RodapeEstilizado=styled.footer`
    height:100%;
    color:white;
    padding:1em;
    background-color:var(--azul-escuro);
    text-align:center;
`

const ListaEstilizada=styled.ul`
    display:flex;
    justify-content:space-around;
    width:10%;
    margin:1em auto;
`
const ItemEstilizado=styled.li`
    list-style-type:none;
`
function Rodape(){
  
    return(
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <img src={google} alt="logo do google"></img>
                    </a>

                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                    <img src={instagram} alt="logo do instagram"></img>

                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                    <img src={whattsapp} alt="logo do whattsapp"></img>

                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                    <img src={facebook} alt="logo do facebook"></img>

                    </a>
                </ItemEstilizado>
               
                        
              

                
                
            </ListaEstilizada>
        </RodapeEstilizado>
    )
}
export default Rodape;