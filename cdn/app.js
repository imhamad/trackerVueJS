const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'K',
            email: 'hamad@netchainmedia.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
    },
    methods: {
        getUser(){
            console.log(this.firstName)
        }
    }
})
app.mount('#render')