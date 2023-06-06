import axios from 'axios';

class Request {
    async users(id) {
        const apiUrl = process.env.VUE_APP_API_URL;
        const route = id ? `user/${id}` : "user/all";
        const response = await axios.get(`${apiUrl}/api/${route}`);
        return response.data;
    }

    async unsubscribe(id) {
        const apiUrl = process.env.VUE_APP_API_URL;
        const response = await axios.delete(`${apiUrl}/api/unsubscribe/${id}`);
        return response.data;
    }

    async registerUser (data, id) {
        data['method'] = id ? id : 'create';
        const apiUrl = process.env.VUE_APP_API_URL;
        const response = await axios.post(`${apiUrl}/api/registerSubmit`, data);
        return response.data;
    }

    async authUser (data) {
        const apiUrl = process.env.VUE_APP_API_URL;
        const response = await axios.post(`${apiUrl}/api/authUser`, data);
        return response.data;
    }

    async processGetSession () {
        const response = await axios.post('https://mighty-ocean-88528.herokuapp.com/api/getSession', {});
        return response.data;
    }

    getSession () {
        return new Promise ( (resolve, reject) => {
            this.processGetSession () .then ((res)=>{
                resolve(res);
            })
            .catch (err=> {
                reject(err);
            })
        });
    }
}

export default Request;