(function(){

    function activar( numero  : number, 
                      optativo?: string,
                      objeto  : string = 'David' ) {

        if ( optativo ) {
            console.log(`${ numero } con el nombre ${ objeto } tiene variable optativa ${ optativo }.`);
        } else {
            console.log(`${ numero } con el nombre ${ objeto }.`);
        }

    }
    


    activar(1, 'X');

})();



