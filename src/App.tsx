import { Container } from '@mui/material';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDados';
import Grafico from './components/Graficos';
import useDadosProfissional from './useDadosProfissional';
import Avaliacao from './components/Avaliacao';
import Subtitulo from './components/Subtitulo';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta()
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional()

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu erro na requisição")
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área administrativa</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem='grafico'>Consultas mensais por especialista</Titulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem='grafico'>Avaliações por especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
