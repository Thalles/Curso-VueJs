var app = new Vue({
    el: '#app',
    data: {
        books: [],
        MySearch: '',
        orderCol: 'id',
        orderInverse: 1,
        pagination: {
            maxPage: 4,
            current: 1,
            totalItems: 0,
            totalPages: 0,
            listPagination: [],
        }
    },
    methods: {
        filterOrderBy: function (e, col) {
            e.preventDefault();
            this.orderCol = col;
            this.orderInverse = this.orderInverse * -1;
        },
        previous: function (e) {
            e.preventDefault();

            pagination = this.pagination;
            if (pagination.current === 1) {
                return false;
            }
            pagination.current = pagination.current - 1;

            this.books = pagination.listPagination[pagination.current - 1];
        },
        next: function (e) {
            e.preventDefault();

            pagination = this.pagination;
            if (pagination.current === pagination.totalPages) {
                return false;
            }
            pagination.current = pagination.current + 1;

            this.books = pagination.listPagination[pagination.current - 1];
        },
        pagePagination: function (e, current) {
            e.preventDefault();

            pagination = this.pagination;
            pagination.current = current + 1;
            this.books = pagination.listPagination[current];
        }
    },
    ready: function () {
        var self = this;
        self.$http.get('dataServer.json').then(function (response) {

            self.pagination.totalItems = response.json().length;
            self.pagination.totalPages = Math.ceil(response.json().length / self.pagination.maxPage);

            var aux = [];
            for (var k = 0 in response.json()) {
                aux.push(response.json()[k]);
                if (aux.length === self.pagination.maxPage) {
                    self.pagination.listPagination.push(aux);
                    aux = [];
                }
            }
            if (aux.length > 0) {
                self.pagination.listPagination.push(aux);
            }

            self.books = self.pagination.listPagination[0];
        });
    }
});