import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://venbest-test.herokuapp.com/'
})

export let getData = {
    getUsers() {
        return instance.get('/').then((response) => {
            return response.data;
        })
    }
}