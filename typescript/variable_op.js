(function () {
    function activar(numero, optativo, objeto) {
        if (objeto === void 0) { objeto = 'David'; }
        if (optativo) {
            console.log(numero + " con el nombre " + objeto + " tiene variable optativa " + optativo + ".");
        }
        else {
            console.log(numero + " con el nombre " + objeto + ".");
        }
    }
    activar(1, 'X');
})();
