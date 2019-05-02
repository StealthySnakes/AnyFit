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
        .catch(resp => {console.log("getUserId failed supply dummy user id 123"+resp); resolve([{user_id: 100005}])});
      });
    }

    getExercises() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exerciseNames`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {console.log("getExercises failed .... supplying dummy data"+resp); resolve([{exercise_name:'situp'},{exercise_name:'plank'}])});
        });
    }

    getExercisePic(exerciseName) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/exerciseName/${exerciseName}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => console.log("getExercisePic failed.... supplying dummy data"+resolve([{exercise_image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple113%2Fv4%2F3b%2Fda%2F34%2F3bda3484-6392-14de-3735-14eceda4ef98%2Fsource%2F256x256bb.jpg&imgrefurl=https%3A%2F%2Fappadvice.com%2Fapp%2F30-day-squat-and-abs-challenge%2F1030348951&docid=H62EGWxIe_qNBM&tbnid=XUQULLKDlZNveM%3A&vet=10ahUKEwjL_cSux_3hAhWCxVkKHaMYBBIQMwhrKAIwAg..i&w=256&h=256&client=ubuntu&bih=846&biw=1187&q=squat%20&ved=0ahUKEwjL_cSux_3hAhWCxVkKHaMYBBIQMwhrKAIwAg&iact=mrc&uact=8'}])));
        });
    }
    getGeneratedWorkout(focus, expertise, intensity) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/focus/${focus}/expertise/${expertise}/intensity/${intensity}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {console.log("getGeneratedWorkout failed... supply dummy data "+resp); resolve([{exercise_desc: "up and down boysssszzz", exercise_image: "https://data.whicdn.com/images/132534183/large.png", default_length: 4, exercise_name: "Jumping Jacks", reps: 8, sets: 4}, {exercise_desc: "lie there on the floor",exercise_image: "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1",default_length: 4,exercise_name:"Planks",reps: 10,sets: 3}])});
        });
    }
    //
    addWorkout(workout) {
        return new Promise((resolve, reject) => {
          workout = JSON.stringify(workout)
            axios.post(`${this.url}/newWorkoutId/${workout}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => {console.log("addWorkout failed... supply dummy workout id 222"+workout.toSource()); resolve(222)});
        });
    }

    // /workoutID/:workoutID/exerciseObject/:exerciseObject
    createNewExercise(workoutID,exerciseObject) {

        return new Promise((resolve, reject) => {
          exerciseObject = JSON.stringify(exerciseObject)
            axios.post(`${this.url}/workoutID/${workoutID}/`,exerciseObject)
                .then(resp => resolve(resp.data))
                .catch(resp => {console.log("addExerciseToWorkout failed... no dummy data this behing the scenes "+resp)});
        });
    }

    addExerciseToWorkout(exercise) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/addExercise/`, exercise)
                .then(resp => resolve(resp.data))
                .catch(resp => {console.log("getGeneratedWorkout failed... supply dummy data "+resp)});
        });
    }




}
