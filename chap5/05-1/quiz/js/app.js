var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        // todo #1. add 1 data property, display using data binding {{ }}
        testMessage: 'Now exercising...',
        uid: 'id-area',
        // todo #2. change uid & check id from chrome developer tool
        flag: false
        // todo #4. check changing for 'flag' property
    },
    methods: {
        // ES6 syntax
        clickBtn() {
            console.log("hi");
        },
        // ES5 syntax - equals clickBtn
        // clickBtn: function() {
        //     console.log("hi");
        // }

        // todo #3. add eventMethod, add button to excute eventMethod from index.html
        testBtn() {
            console.log("added event method");
        }
    }
});