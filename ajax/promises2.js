
var valors = [10,18,6,20,30,40];

recull  = ( id ) => {


    return new Promise (( resolve, reject) => {


            if ( id in valors) {

                resolve(id);
            }
            else{
                reject (id);
            }


    });


}

recull (10).then ( ide => console.log(ide));
