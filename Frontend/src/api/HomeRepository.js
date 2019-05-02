import axios from 'axios';

export class HomeRepository {

    url = 'http://18.218.117.25:3000/';
    config = {
        headers: {
            Authorization: 'root'
        }
    };

    // getFriends(userID) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.url}/${userID}`, this.config)
    //         .then(resp => resolve(resp.data))
    //         .catch(resp => alert("getFriends failed: "+resp))
    //     });
    // }

    getProfilePic(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/home/${userID}/avatar`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => {console.log("getProfilePic failed: supplu imge "+resp); resolve([{avatar:"https://via.placeholder.com/150"}])})
        });
    }

    getBio(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/home/${userID}/bio`, this.config)                     //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => {console.log("getBio failed: supply bio "+resp); resolve([{user_bio:"Hey guys, I'm a sport enthusiast who enjoys stretching everyday. Yes."}])})
        });
    }

    getWorkouts(userID) {                                                            // this will probably need changing too
        return new Promise((resolve, reject) => {                                   // this just gets a list of custom workouts
            axios.get(`${this.url}/home/${userID}/user_workouts`, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => {console.log("getWorkouts failed: "+resp); resolve([{workout_id:107, workout_name:"Jimbo's stretch routing", workout_desc:"a fun workout that embiggens you" },{workout_id:102,workout_desc:"An upper body. workout", workout_name:"Arm Hard Work" }])})
        })

    }

    // getTimeline(userID) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.url}/${userID}/timeline`, this.config)                // Assume this will change.
    //         .then(resp => resolve(resp.data))
    //         .catch(resp => alert("getTimeline failed: "+resp))
    //     });
    // }

//favorite is one or zero
    setFavorite(userID, workoutID, favorite) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${userID}/workout_id/${workoutID}/favorite/${favorite}`, workoutID, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => console.log("setFavorite failed: "+resp))
        });
    }

    getFavorites(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/home/${userID}/favorite_workout`, this.config)               //prepare to switch this link
            .then(resp => resolve(resp.data))
            .catch(resp => {console.log("getFavorites failed: "+resp); resolve([{workout_id:107, workout_name:"Jimbo's stretch routing", workout_desc:"a fun workout that embiggens you" },{workout_id:102,workout_desc:"An upper body. workout", workout_name:"Arm Hard Work" }])})
        });
    }
}
