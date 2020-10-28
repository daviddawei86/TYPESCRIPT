(function() {
    var pedirAlumno = function(nombre) {
        var Alumno = 'David';
        return new Promise(function(resolve, reject) {
            if (Alumno != nombre) {
                reject('No existe');
            } else {
                Alumno = 'Encontrado';
                resolve(Alumno);
            }
        });
    };
    pedirAlumno('David')
        .then(function(resul) { return console.log("El Alumno fue " + resul); })["catch"](console.warn);
})();