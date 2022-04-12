new Vue({
    el: '#app',

    data: {
        arrayAlbums: [],
        genereSelezionato: "general",
    },

    created() {
        axios.get('http://localhost:81/php-ajax-dischi/database/data.php')
            .then(response => this.arrayAlbums = response.data)
    },

    computed: {
        funzioneCambioGenere() {
            let arrayFiltrato = [];
            if (this.genereSelezionato == "") {
                arrayFiltrato = this.arrayAlbums;
            } else if (this.genereSelezionato == "general") {
                arrayFiltrato = this.arrayAlbums;
            } else {
                arrayFiltrato = this.arrayAlbums.filter((elemento) => {
                    if (
                        elemento.genre.toLowerCase() == this.genereSelezionato.toLowerCase()
                    ) {
                        return elemento;
                    }
                });
            }

            return arrayFiltrato;
        },
    },
})