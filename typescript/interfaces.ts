(()=>{

    interface Alumno {
        nombre: string;
        edad: number;
        prof: string;
        clase?: string;
    }
    
    const inscribirAlum= ( alum: Alumno ) => {
        console.log(`El nuevo Alumno ${ alum.nombre } tiene ${ alum.edad } de edad`);
    }

   
    const Alu1: Alumno = {
        nombre: 'David',
        edad: 30,
        prof: 'Javi'
    }

    inscribirAlum( Alu1 );
   

})();



