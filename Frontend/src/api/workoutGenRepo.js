import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export class WorkoutGeneratorRepository {
    url = "http://18.218.117.25:3000";
    config = {
      headers: {
        Authorization: 'jlawrimore',
      }
    };
    //expected format for get requests
//     getExercises:      [{exercise_name:'situp'},{exercise_name:'plank'}] WorkoutGenerator.jsx:89
// getGeneratedWorkout:      [{desc: "up and down boysssszzz", imageUrl: "https://data.whicdn.com/images/132534183/large.png", length: 4, name: "Jumping Jacks", reps: 8, sets: 4},
//     {desc: "lie there on the floor",imageUrl: "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1",length: 4,name:"Planks",reps: 10,sets: 3}] WorkoutGenerator.jsx:91
// getExercisePic:      [{exercise_image:'https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1'}]
    getUserId(l,p) {
      return new Promise((resolve, reject) => {
        axios.post(`${this.url}/home/${l}/password/${p}`, this.config)
        .then(resp => resolve(resp.data))
        .catch(resp => {alert("getUserId failed supply dummy user id 123"+resp); resolve([{user_id: 123}])});
      });
    }

    getExercises() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exerciseNames`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {alert("getExercises failed .... supplying dummy data"+resp); resolve([{exercise_name:'situp'},{exercise_name:'plank'}])});
        });
    }

    getExercisePic(exerciseName) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exerciseName/${exerciseName}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert("getExercisePic failed.... supplying dummy data"+resolve([{exercise_image:'https://sites.google.com/site/bodybildingserbia/_/rsrc/1472783288416/ronnie-coleman/Ronniecoleman.jpg?height=195&width=200'}])));
        });
    }
    getGeneratedWorkout(focus, expertise, intensity) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/focus/${focus}/expertise/${expertise}/intensity/${intensity}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {alert("getGeneratedWorkout failed... supply dummy data "+resp); resolve([{exercise_desc: "up and down boysssszzz", exercise_image: "https://data.whicdn.com/images/132534183/large.png", default_length: 4, exercise_name: "Jumping Jacks", reps: 8, sets: 4}, {exercise_desc: "lie there on the floor",exercise_image: "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1",default_length: 4,exercise_name:"Planks",reps: 10,sets: 3}])});
        });
    }
    //
    addWorkout(workout) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, workout, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {alert("addWorkout failed... supply dummy workout id 222"+workout.toSource()); resolve(222)});
        });
    }
    addExerciseToWorkout(workoutName,exercise) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, workoutName,exercise, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {alert("addExerciseToWorkout failed... no dummy data this behing the scenes "+exercise.toSource())});
        });
    }

}
