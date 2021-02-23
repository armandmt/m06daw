function obtenirDades() {
    // Obtener la instancia del objeto XMLHttpRequest
    if(window.XMLHttpRequest) {  peticion_http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Preparar la funcion de respuesta  
    
    peticion_http.onreadystatechange = mostraContingut;
    
    // Realizar  peticion HTTP
    peticion_http.open('GET', 'https://reqres.in/api/users', true);  
    peticion_http.send(null);
            
    function mostraContingut() {  
    
        if(peticion_http.readyState == 4) {
                if(peticion_http.status == 200) {  
                    var array = JSON.parse(peticion_http.responseText).data;

                    array.forEach(element => {
                        console.table(element)
                    });
                }  
        } 
   } 
}
      
window.onload = obtenirDades