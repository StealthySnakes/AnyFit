import axios from 'axios';

export class AccountRepository {
    url = "https://api.johnlawrimore.com/directory/accounts";
    config = {
        headers: {
            Authorization: 'cholzer'
        }
    };

    getUsernames(username) {
        return new Promise((resolve, reject) => {
            axios.get(this.url, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getWorkout(workoutId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${workoutId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateWorkout(workoutId, workout) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${workoutId}`, workout, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addAccount(account) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, account, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}