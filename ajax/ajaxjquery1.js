$(document).ready (function() {

// carrega en l'emement qualsevol document web (json o no)
// $("#dades").load ("https://jsonplaceholder.typicode.com/users")

$.get("https://reqres.in/api/users", function(response) {
 
    response.data.forEach ((element,index) => {

        $("#dades").append("<p>" + index + " - " + element.first_name + "</p>");

    });

});

var usuari = {

    nom: "Profe M06",
    web: "insjoaquimmir.cat"
};

$.post ("https://reqres.in/api/users", usuari, function(response) {

  console.log (response);

});


$("#formulari").submit( function (e) {

    e.preventDefault();  // Evitar que el form es recarregui
   
    var usuari = {
        nom: $('input[name="nom"]').val(),
        web: $('input[name="web"]').val()
    };

/*    $.post($(this).attr("action"), usuari,function (response) {
            console.log(response);
    } ).done (function() {
        alert ("S ha acabat");
    })

*/
    $.ajax({

        type: "POST",
        url: $(this).attr("action"),
        data: usuari,
        beforeSend:  function() {
            console.log ("Abans d'enviar ...")
        },
        success: function(response) {
            console.log(response);
        },
        error:  function(response) {
            console.log("Horror, hi ha hagut un error");
        },
        timeout: 2000 


        });


        return false;


    })

});




 
