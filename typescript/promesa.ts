(()=>{


    const pedirAlumno = ( nombre: string ): Promise<string> => {

        let Alumno = 'David';

        return new Promise( (resolve, reject) => {

            if ( Alumno != nombre  ) {
                reject('No existe');
            } else {
                Alumno = 'Encontrado';
                resolve(Alumno);
            }

        });

    }


    pedirAlumno( 'David')
        .then( resul => console.log(`El Alumno fue ${ resul }`) )
        .catch( console.warn )


})();



