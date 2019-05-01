import axios from 'axios';

export class AccountRepository {
    url = "http://18.218.117.25:3000/";
    config = {
        headers: {
            Authorization: 'cholzer'
        }
    };

    addAccount(account) {
        return new Promise((resolve, reject) => {
            axios.post(this.url/signup, account, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}