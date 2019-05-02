import axios from 'axios';

export class WorkoutRepository {
    url = "http://18.218.117.25:3000";
    config = {
        headers: {
            Authorization: 'cholzer'
        }
    };

    getWorkout(workoutId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/workout/${workoutId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateWorkout(workoutId, workoutObject) {
        return new Promise((resolve, reject) => {
            workoutObject = JSON.stringify(workoutObject);
            axios.put(`${this.url}/newWorkoutId/${workoutObject}/workout_id/${workoutId}`,  this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateRating(workoutId, rating) {
        return new Promise((resolve, reject) => {
            rating = JSON.stringify(rating);
            axios.put(`${this.url}/exercises/${workoutId}/rating/${rating}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateComment(workoutId, comment) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/comments/${comment}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }


}
