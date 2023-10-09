import IProfissional from "./iProfissional";

export default interface IConsulta extends IProfissional{
    id:number,
    data:string,
    horario:string,
    profissional:Array<IProfissional>,
    especialidade:string,
    paciente:string,
    modalidade:string
}