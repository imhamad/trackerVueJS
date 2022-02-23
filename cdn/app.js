const app = Vue.createApp({
    data(){
        return{
            firstName: 'Hamad',
            lastName: 'K',
            email: 'hamad@netchainmedia.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
    }
})
app.mount('#render')