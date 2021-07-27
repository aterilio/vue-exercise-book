// #1. register global component for 'todo-footer'
// template : <p>This is another global child component</p>
Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    // #2. register local component for 'todo-list'
    // template : <p>This is another local child component</p>
    components: {
        'todo-list': {
            template: '<p>This is another local child component</p>'
        }
    }
});