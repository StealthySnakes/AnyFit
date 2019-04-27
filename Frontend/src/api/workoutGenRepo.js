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
        .catch(resp => alert(resp));
      });
    }

    getExercises() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exerciseNames`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getExercisePic(exerciseName) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exerciseName/${exerciseName}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    getGeneratedWorkout(focus, expertise, length, intensity) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exercises`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    //
    addWorkout(workout) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, workout, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(workout.toSource()));
        });
    }
    addExerciseToWorkout(workoutName,exercise) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, workoutName,exercise, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(exercise.toSource()));
        });
    }

}
