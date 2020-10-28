(function () {
    var mayus = function (a) {
        return a.toUpperCase();
    };
    var mayus2 = function (a) { return a.toUpperCase(); };
    var sumar = function (a, b) {
        return a + b;
    };
    var sumar2 = function (a, b) { return a + b; };
    /*
    No tiene sus propios enlaces a this o super y no se debe usar como métodos.
    No tiene argumentos o palabras clave new.target.
    No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
    No se puede utilizar como constructor.
    No se puede utilizar yield dentro de su cuerpo.
    */
    var Alumno = {
        nombre: 'David',
        metodoDelObjeto: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre);
            }, 1000);
        }
    };
    Alumno.metodoDelObjeto();
})();
