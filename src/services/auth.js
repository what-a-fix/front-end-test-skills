import Axios from "axios";

export class Auth {
    constructor() {
        this.url = 'http://localhost:8000/api/';
    }
    async register(user) {
        let response = await Axios.post(this.url+'register', user);
        if(response.status === 201) {
            return true;
        }
        return false;
    }
    async login(email, password) {
        let response = await Axios.post(this.url+'login_check', {
            username: email,
            password: password
        });
        localStorage.setItem('token', response.data.token);
    }
}