import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes>{

    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) : void{
        this.negociacoes.push(negociacao);
    }

    paraArray() : Negociacao[] {
        return ([] as Negociacao[]).concat(this.negociacoes);
    }

    paraTexto(){
        console.log(JSON.stringify(this.negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean{

        return JSON.stringify(this.negociacoes)==JSON.stringify(negociacoes.negociacoes);
    }
}