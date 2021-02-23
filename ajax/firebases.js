$(document).ready( function() {

    
    const firebaseConfig = {
        apiKey: "AIzaSyD_LVhAc6aHLHNRm4jNIHeq2y04LL_IJhg",
        authDomain: "exemple2021-c42ba.firebaseapp.com",
        databaseURL: "https://exemple2021-c42ba-default-rtdb.europe-west1.firebasedatabase.app/",
        projectId: "exemple2021-c42ba",
        storageBucket: "exemple2021-c42ba.appspot.com",
        messagingSenderId: "98173605660",
        appId: "1:98173605660:web:781ca4df5f9bb0234dccd9"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    $("#selprov").on("change", (e) => {

            console.log("Eto ha cambiado " + $("#selprov").val()  )


    })

    

    var provin = firebase.database().ref("Provincies")

    //var provin2 = firebase.database.collection("Provincies");

    provin.on('value',function(dades)
    {
        productes = dades.val();

        productes.forEach(valor => {

        $("#selprov").append("<option value='"+ valor.provincia+"'>"+valor.provincia+"</option>" );
               
        
        });

    });
    


});

       //const data = firebase.database();
        //let refToData = data.ref()

    /*fetch("provincias-espanolas.json")
    .then (data => data.json())
    .then (provincies => {

        provincies.map((tot,i) => {


            let prov= {
                   'provincia': tot.fields.provincia,
                   'codi': tot.fields.codigo
            }            
            firebase.database().ref("Provincies/"+i).set(prov)
               .then ( () => console.log("Provincies: Tot ok"));
            //console.log(tot.fields.provincia + "- " + tot.fields.codigo)
        });
            
    


    })  
/*
    fetch("poblacions2.json")
    //fetch("https://opendata.arcgis.com/datasets/c7a13fbca35d4d89953e8e80b81c9742_0.geojson")
    .then (data => data.json())
    .then (poblacions => {
    
        tt = poblacions.features;
        arraypobles = []
        tt.map((tot,i) => {
            
            //console.log(tot.attributes.Texto + " - " + tot.attributes.Cod_Prov )
            var dd = {

                poblacio: tot.properties.Texto,
                cod_prov: tot.properties.Cod_Prov,
                codi: tot.properties.Codigo
            }

            firebase.database().ref("Poblacions/"+i).set(dd)
                    .then ( () => console.log("Poblacions: Tot ok"))
        
            //arraypobles.push(dd);
            
        });
        //console.log (arraypobles.length);
    
    });
*/
  /*  fetch("codis_postals.json")
    .then (data => data.json())
    .then (codis => {

        console.log (codis);
        codis.map( (tot,i) => {

            let dd = {
                codi_postal: tot.codigo_postal,
                codi_poble: tot.municipio_id,
                nom_poble: tot.municipio_nombre
            }

            firebase.database().ref("Codis_Postals/"+i).set(dd)
            

        })
        

    }); */ 