class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this._inputData.valueAsDate, this._inputQuantidade.valueAsNumber, this._inputValor.valueAsNumber);
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
    }
}
