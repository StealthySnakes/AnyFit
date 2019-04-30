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
            .catch(resp => alert("getFriends failed: "+resp))
        });
    }

    getProfilePic(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/avatar`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert("getProfilePic failed: "+resp))
        });
    }

    getBio(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/bio`, this.config)                     //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => alert("getBio failed: "+resp))
        });
    }

    getWorkouts(userID) {                                                           // this will probably need changing too
        return new Promise((resolve, reject) => {                                   // this just gets a list of custom workouts
            axios.get(`${this.url}/${userID}/workouts`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert("getWorkouts failed: "+resp))
        })

    }

    getTimeline(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/timeline`, this.config)                // Assume this will change.
            .then(resp => resolve(resp.data))
            .catch(resp => alert("getTimeline failed: "+resp))
        });
    }

    setFavorite(userID, workoutID) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${userID}`, workoutID, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert("setFavorite failed: "+resp))
        });
    }

    getFavorites(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/favorites`, this.config)               //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => alert("getFavorites failed: "+resp))
        });
    }
}
