(function () {
    //CLASE CON CONSTRUCTOR NORMAL
    var Alumno = /** @class */ (function () {
        function Alumno(apellido, id) {
            this.apellido = apellido;
            this.id = id;
        }
        return Alumno;
    }());
    //CLASE CON CONTRUCTOR ABREVIADO
    var Alumno2 = /** @class */ (function () {
        function Alumno2(nombre, apellido, nick, activo, id) {
            if (activo === void 0) { activo = true; }
            if (id === void 0) { id = 0; }
            this.nombre = nombre;
            this.apellido = apellido;
            this.nick = nick;
            this.activo = activo;
            this.id = id;
        }
        return Alumno2;
    }());
    var david = new Alumno('Rodri', 1);
    console.log(david);
})();
