import IProfissional from "./components/types/iProfissional"
import useFetch from "./components/useFetch"

const useDadosProfissional=()=>{
    return useFetch<IProfissional[]>({url:"profissionais"})
}
export default useDadosProfissional