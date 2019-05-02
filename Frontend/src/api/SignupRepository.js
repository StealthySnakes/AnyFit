import axios from 'axios';

export class SignupRepository {
    url = "http://18.218.117.25:3000";
    config = {
        headers: {
            Authorization: 'cholzer'
        }
    };

    addAccount(acc) {
        
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/newuser`, acc, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}
