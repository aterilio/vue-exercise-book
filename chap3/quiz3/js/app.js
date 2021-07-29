// todo #1
// register 'sibling-component'
// options : template, props

Vue.component('sibling-component', {
    props: ['propsSibling'],
    template: '<p>{{ propsSibling }}</p>'
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',
        // todo #2
        // add data property & value -> props for sibling-component
        anotherMessage: 'test message for sibling component'
    }
});