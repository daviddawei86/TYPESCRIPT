(()=>{

    //Desestructuramos objeto
    const Alumno = {
        nombre: 'David',
        clase:  'B',
        prof:  'Javi'
    }

    const extraer = ({ nombre, prof }: any ) => {

       
        console.log( nombre );
        console.log( prof );

    }

    
    
    //Desestructuramos array
    const Alumnos: string[] = ['David','Javi', 'Laura'];
    
    const [ , , arana ] = Alumnos;

  

    const extraerArr = ( [David,Javi, Laura]: string[] ) => {

        console.log( David );
        console.log( Javi );
        console.log( Laura );

    }

    extraerArr( Alumnos );


})();



