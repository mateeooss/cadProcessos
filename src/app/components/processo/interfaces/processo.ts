import { Pessoa } from "../../pessoa/interfaces/pessoa";

export interface Processo{
    id: number,
    numero: number,
    ano: string,
    dataCadastro: string,
    pessoa: Pessoa,
    descricao: String
}