(function () {
    //Desestructuramos objeto
    var Alumno = {
        nombre: 'David',
        clase: 'B',
        prof: 'Javi'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, prof = _a.prof;
        console.log(nombre);
        console.log(prof);
    };
    //Desestructuramos array
    var Alumnos = ['David', 'Javi', 'Laura'];
    var arana = Alumnos[2];
    var extraerArr = function (_a) {
        var David = _a[0], Javi = _a[1], Laura = _a[2];
        console.log(David);
        console.log(Javi);
        console.log(Laura);
    };
    extraerArr(Alumnos);
})();
