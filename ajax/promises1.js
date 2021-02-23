/*
var usu = [];

// ?delay=3
fetch("https://reqres.in/api/users?delay=5")
    .then(data =>data.json())
    .then (users => {
        usu = users.data;
        console.log(users)
        //usu.map((tot,i) => {
          //  console.log(tot.first_name)
       // });

        fetch("https://reqres.in/api/users/5?delay=1")
        .then(data =>data.json())
        .then (users => {
            usu = users.data;
            console.log(users)
            
                console.log("Consulta 1 i consulta 2 fetes")
                console.log(usu.first_name)
                console.log(usu.last_name)
            

        
         })
    })
    */
    
      
    
    fetch1 = () => fetch("https://reqres.in/api/users/3");   // retorna 
    fetch2 = () => fetch("https://reqres.in/api/users/5");   // una promesa
    fetch3 = () => fetch("https://reqres.in/api/users?delay=3");   // una promesa

    
    // ([d1.d2]) equival a "dades" i dades[0],dades[1] dins el codi
    Promise.all ([ fetch1(),fetch2()])
    // .then (dades => { })
    .then ( ([d1,d2])  => {
            // dades[0].json()....
            d1.json().then ( rebut => {
                    console.log(rebut.data.first_name);
            })
            // dades[1].json() ......
            d2.json().then ( rebut => {
                console.log(rebut.data.first_name);
            })
    })
    .catch( err => {
        console.log (err);
        console.log("oohhh");

     })
     .finally ( () => {
        console.log ("Això ha acabat, bé o malament");
     })

     fetch3 = () => fetch("https://reqres.in/api/users?delay=6");
     fetch4 = () => fetch("https://reqres.in/api/users?delay=3");
     fetch5 = () => fetch("https://reqaaaares.in/api/users");  // Incompleix promesa

     Promise.race ([fetch3(), fetch4(), fetch5()])   
     .then (console.log)
     .catch(console.warn);

     Promise.race ([fetch3(),fetch4()])
     .then (console.log)
     .catch(console.warn);





