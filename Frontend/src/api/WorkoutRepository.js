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

    updateWorkout(workoutId, workout) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${workoutId}`, workout, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateRating(workoutId, rating) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${workoutId}/rating/${rating}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateComment(workoutId, comment) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${workoutId}/comment/${comment}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }


}