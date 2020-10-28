(()=>{

//CLASE CON CONSTRUCTOR NORMAL

     class Alumno {

         nombre: string;
         apellido: string;
         nick: string;
         activo: boolean;
         id: number;

         constructor( apellido: string, id: number ){
             this.apellido = apellido;
             this.id = id;
         }
        
     }

 //CLASE CON CONTRUCTOR ABREVIADO
    class Alumno2 {

        constructor( public nombre: string,
                     public apellido: string,
                     public nick?: string,
                     public activo: boolean  = true,
                     public id: number = 0){}
        
    }

    const david = new Alumno('Rodri', 1);
    
    console.log(david);

})();



