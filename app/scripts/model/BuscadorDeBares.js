"use strict";
var BuscadorDeBares = (function () {
    // CONSTRUCTOR
    function BuscadorDeBares(guiaDeBares, filtrador, dibujador) {
        this.guiaDebares = guiaDeBares;
        this.filtrador = filtrador;
        this.dibujador = dibujador;
    }
    // MENSAJES QUE RESPONDE
    BuscadorDeBares.prototype.buscarBares = function () {
        var bares = this.guiaDebares.getBares();
        bares = this.filtrador.filtrar(bares);
        this.dibujador.dibujarBaresEnMapa(bares);
        return bares;
    };
    return BuscadorDeBares;
}());
exports.BuscadorDeBares = BuscadorDeBares;
//# sourceMappingURL=BuscadorDeBares.js.map