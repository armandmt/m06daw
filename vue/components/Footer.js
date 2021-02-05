app.component("footer-banc" , {

    props:  ['valor','data'],
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white" >
        <h3> {{ text }} - {{ valor }}</h3>
        <p> {{ data }}</p>
    </div>
       
    `,
    data() {
        return {
            text: 'Footer del meu lloc web',
            
        }
    }

})