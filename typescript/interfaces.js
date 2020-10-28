(function () {
    var inscribirAlum = function (alum) {
        console.log("El nuevo Alumno " + alum.nombre + " tiene " + alum.edad + " de edad");
    };
    var Alu1 = {
        nombre: 'David',
        edad: 30,
        prof: 'Javi'
    };
    inscribirAlum(Alu1);
})();
