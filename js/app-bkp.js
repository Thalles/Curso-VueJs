var hello = new Vue({
    el: '#hello',
    data: {
        msg: "Hello Vue!",
        peoples: [
            {name: 'Maria'},
            {name: 'Pedro'},
            {name: 'Gustavo'},
            {name: 'Ana'},
            {name: 'Gabriela'}
        ],
        newElement: '',
        elements: [],
        objectA: {
            'font-size': '30px'
        },
        objectB: {
            color: "red"
        },
        myListForm: [],
        myForm: {
            name: '',
            email: ''
        }
    },
    methods: {
        addElement: function (e) {
            var title = this.newElement.trim();
            if (title) {
                this.elements.push({title: title});
                this.newElement = "";
            }
        },
        removeElement: function (e, index) {
            e.preventDefault();
            this.elements.splice(index, 1);
        },
        myClick: function () {
            alert('Click')
        },
        myKeyup: function () {
            alert('myKeyup');
        },
        addForm: function () {
            this.myListForm.push({name: this.myForm.name, email: this.myForm.email});
            this.myForm.name = '';
            this.myForm.email = '';
        }
    }
});
//video parou em 13 minutos e 28 segundos