new Vue({
    el: '#app',

    data: {
        arrayAlbums: [],
    },

    created() {
        axios.get('http://localhost:81/php-ajax-dischi/database/data.php')
            .then(response => this.arrayAlbums = response.data)
    }
})