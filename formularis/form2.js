  //Expresión para validar un correo electrónico
  var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  //Expresión para validar edad de 18 a 60 años
  var expr2 = /^1[8-9]|[2-5]\d|60$/;
  $(document).ready(function(){
      //función click
      $("#bEnviar").click(function(){
          //Guardar en variables el valor que tengan las cajas de texto
          //Por medio de los id's
          //Y tener mejor manipulación de dichos valores
          var nom = $("#itNom").val();
          var correu = $("#itMail").val();
          var assumpte = $("#itAssumpte").val();
          var edat = $("#itEdat").val();

          // --- Condicionales anidados ----
          //Si nombre está vacío
          //Muestra el mensaje
          //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
          if(nom == ""){
              $("#missatge1").fadeIn("slow");
              return false;
          }
          //en otro caso, el mensaje no se muestra
          else{
              $("#missatge1").fadeOut();

              //Si correo está vacío y la expresión NO corresponde -test es función de JQuery
              //Muestra el mensaje
              //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
              if(correu == "" || !expr.test(correu)){
                  $("#missatge2").fadeIn("slow");
                  return false;
              }
              else{
                  $("#missatge2").fadeOut();

                  if(assumpte == ""){
                      $("#missatge3").fadeIn("slow");
                      return false;
                  }
                  else{
                      $("#missatge3").fadeOut();

                      if(edat == "" || !expr2.test(edat)){
                          $("#missatge4").fadeIn("slow");
                          return false;
                      }
                  }
              }
          }

      });//click
  });//ready