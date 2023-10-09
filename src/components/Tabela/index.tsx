import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IConsulta from "../types/IConsulta";
import styled from "@emotion/styled";


const CelulaEstilizavel=styled(TableCell)(()=>({
    [`&.${tableCellClasses.head}`]:{
        color:"var(--azul-escuro)",
        fontSize:18,
        fontWeight:700,
        fontFamily:"var(--fonte-principal"
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize:16,
        fontFamily:"var(--fonte-principal)"
    }
}))

const LinhaEstilizada=styled(TableRow)(()=>({
    [`&:nth-of-type(odd)`]:{
        backgroundColor:"var(--cinza-claro)",
        align:"right"
    }
}))

function Tabela({consultas}:{consultas:IConsulta[]| null}){
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth:700}} aria-label="tabela-customizada">
                    <TableHead>
                        <LinhaEstilizada>
                            <CelulaEstilizavel>Data</CelulaEstilizavel>
                            <CelulaEstilizavel>Horário</CelulaEstilizavel>
                            <CelulaEstilizavel>Profissional</CelulaEstilizavel>
                            <CelulaEstilizavel>Especialidade</CelulaEstilizavel>
                            <CelulaEstilizavel>Paciente</CelulaEstilizavel>
                            <CelulaEstilizavel>Modalidade</CelulaEstilizavel>
                        </LinhaEstilizada>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha)=>{
                            return(
                                <TableRow>
                                    <CelulaEstilizavel component='th' scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizavel>
                                    <CelulaEstilizavel>{linha.horario}</CelulaEstilizavel>
                                    <CelulaEstilizavel>{linha.profissional[0].nome}</CelulaEstilizavel>
                                    <CelulaEstilizavel>{linha.profissional[0].especialidade}</CelulaEstilizavel>
                                    <CelulaEstilizavel>{linha.paciente}</CelulaEstilizavel>
                                    <CelulaEstilizavel>{linha.modalidade}</CelulaEstilizavel>

                                </TableRow>
                            )
                        })}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Tabela