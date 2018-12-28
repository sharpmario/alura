import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoParcial } from '../models/index';
import { NegociacaoService } from '../services/index';

export class NegociacaoController{
    
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView("#mensagemView");
    
    private negociacaoService = new NegociacaoService();

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(){
        
        let data = new Date(this._inputData.val().replace(/-/g,','));

        if(!this.ehDiaUtil(data)){
            this._mensagemView.update('Somente negociação em dias úteis..');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso!');      
        
    }

    private ehDiaUtil(data : Date) : boolean{
        return !(data.getDay() == DiaDaSeamana.Domingo || data.getDay() == DiaDaSeamana.Sabado);
    }

    @throttle()
    importaDados(){

        function isOk(res: Response){
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);
            }
        }

        this.negociacaoService.obterNegociacoes(isOk)
        .then(negociacoes => negociacoes.forEach(negociacao => {
            this._negociacoes.adiciona(negociacao);
            this._negociacoesView.update(this._negociacoes);
        }));

    }

}

enum DiaDaSeamana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}