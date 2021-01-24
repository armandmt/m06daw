new Vue({

    el: '#app',
    data: {

        salutacions: "Hola mon!!",
        numero: 10,
        llista : [ '1','2','3','4','100','230'],
        actiu : true,
        blog: "<h4>Hola Mon!!!</h4>",
        cadena: "",
        nom_complert: "",
        error_validacio: "",
        nom: "",
        text_error: false,
        text_success: false,
        sizetxt: "",
        font_text: 10


    },
    methods: {
        saludar: function () {
                console.log(this.cadena);

        },
        verificarNomComplert: function() {
            if (this.nom_complert.length < 4) {
                this.error_validacio = " El nom no és vàlid"
            } else {
                this.error_validacio = ""
            }

        },
        verificarNom: function() {
            if (this.nom == "Leonardo") {
                this.text_success =  true;
                this.text_error = false;
            }
            else {
                this.text_error = true;
                this.text_success =  false;                
            }
        },
        canviarText: function() {

            this.font_text = parseInt(this.sizetxt)

        }

    },

});

new Vue({
    el: "#app2",
    data: {

        salutacions2 : "Hola mon per segon cop"
    }


})