import axios from 'axios';

class Request {
    async users(id) {
        const route = id ? `user/${id}` : "user/all";
        const response = await axios.get(`https://mighty-ocean-88528.herokuapp.com/api/${route}`);
        return response.data;
    }

    async unsubscribe(id) {
        const response = await axios.delete(`https://mighty-ocean-88528.herokuapp.com/api/unsubscribe/${id}`);
        return response.data;
    }

    async registerUser (data, id) {
        if (id) {
            data['method'] = id
        } else {
            data['method'] = 'create';
        }
        const response = await axios.post(`https://mighty-ocean-88528.herokuapp.com/api/registerSubmit`, data);
        return response.data;
    }

    async authUser (data) {
        const response = await axios.post('https://mighty-ocean-88528.herokuapp.com/api/authUser', data);
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