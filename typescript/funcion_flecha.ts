(function(){


    const mayus= function( a: string ) {
        return a.toUpperCase();
    }

    const mayus2 = ( a: string ) => a.toUpperCase();

    const sumar = function( a:number, b:number) {
        return a + b;
    }

    const sumar2 = ( a:number, b:number ) => a + b;


    /* 
    No tiene sus propios enlaces a this o super y no se debe usar como métodos.
    No tiene argumentos o palabras clave new.target.
    No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
    No se puede utilizar como constructor.
    No se puede utilizar yield dentro de su cuerpo.
    */
    const Alumno = {
        nombre: 'David',
            metodoDelObjeto() {
            
            setTimeout( () => {
                
                console.log(this.nombre);

            }, 1000 );
            
        }
    }


    Alumno.metodoDelObjeto();

})();



