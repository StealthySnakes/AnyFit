import axios from 'axios';

export class HomeRepository {

    url = 'http://18.218.117.25:3000/';
    config = {
        headers: {
            Authorization: 'root'
        }
    };

    getFriends(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp))
        });
    }

    getProfilePic(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/avatar`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp))
        });
    }

    getBio(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/bio`, this.config)                     //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp))
        });
    }

    getWorkouts(userID) {

    }

    getTimeline(userID) {

    }

    setFavorite(userID, workoutID) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${userID}`, workoutID, this.config)              
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp))
        });
    }

    getFavorites(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/favorites`, this.config)               //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp))
        });
    }
}