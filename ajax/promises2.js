
var valors = [10,18,6,20,30,40];

recull  = ( id ) => {

    return new Promise (( resolve, reject) => {

            if ( valors.includes(id)) {
                console.log("resolve");
                resolve(id);
            }
            else{
                console.log("reject");
                reject (id);
            }

    });

}


recullAsync  = async ( id ) => {

    if ( valors.includes(id)) {
         return id;  // resolve
    }
    else {
        throw ("No existeix l'element " + id);  // reject
    }
};

recullAsync (10)
    .then ( ide => console.log(ide))
    .catch( console.warn);
recullAsync (12)
    .then ( console.log)
    .catch( ide=>console.warn(ide));
 

/*recull (10)
    .then ( ide => console.log(ide))
    .catch( ide=>console.log(ide));

recull (12)
   .then ( ide => console.log(ide))
   .catch( ide=>console.log(ide));

*/