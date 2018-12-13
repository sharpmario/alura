class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this._inputData.valueAsDate, this._inputQuantidade.valueAsNumber, this._inputValor.valueAsNumber);
    }
}
