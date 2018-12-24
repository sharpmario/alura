System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController, DiaDaSeamana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView("#mensagemView");
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this.ehDiaUtil(data)) {
                        this._mensagemView.update('Somente negociação em dias úteis..');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                ehDiaUtil(data) {
                    return !(data.getDay() == DiaDaSeamana.Domingo || data.getDay() == DiaDaSeamana.Sabado);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSeamana) {
                DiaDaSeamana[DiaDaSeamana["Domingo"] = 0] = "Domingo";
                DiaDaSeamana[DiaDaSeamana["Segunda"] = 1] = "Segunda";
                DiaDaSeamana[DiaDaSeamana["Terca"] = 2] = "Terca";
                DiaDaSeamana[DiaDaSeamana["Quarta"] = 3] = "Quarta";
                DiaDaSeamana[DiaDaSeamana["Quinta"] = 4] = "Quinta";
                DiaDaSeamana[DiaDaSeamana["Sexta"] = 5] = "Sexta";
                DiaDaSeamana[DiaDaSeamana["Sabado"] = 6] = "Sabado";
            })(DiaDaSeamana || (DiaDaSeamana = {}));
        }
    };
});
