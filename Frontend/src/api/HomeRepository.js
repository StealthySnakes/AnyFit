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
            axios.get(`${this.url}/home/${userID}/avatar`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => {alert("getProfilePic failed: supplu imge "+resp); resolve([{avatar:"https://via.placeholder.com/150"}])})
        });
    }

    getBio(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userID}/bio`, this.config)                     //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => {alert("getBio failed: supply bio "+resp); resolve([{user_bio:"Hey guys, I'm a sport enthusiast who enjoys stretching everyday. Yes."}])})
        });
    }

    getWorkouts(userID) {                                                            // this will probably need changing too
        return new Promise((resolve, reject) => {                                   // this just gets a list of custom workouts
            axios.get(`${this.url}/home/${userID}/user_workouts`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => {alert("getWorkouts failed: "+resp); resolve([{workout_id:123, workout_name:"Jimbo's stretch routing", workout_desc:"its a str" },{workout_id:133,workout_desc:"its a str", workout_name:"Omar's stretch routing" }])})
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
