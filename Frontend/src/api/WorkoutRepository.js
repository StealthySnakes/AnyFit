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
                .catch(resp => console.log(resp));
        });
    }

    updateRating(workoutId, rating) {
        return new Promise((resolve, reject) => {
            rating = JSON.stringify(rating);
            axios.put(`${this.url}/exercises/${workoutId}/rating/${rating}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => console.log(resp));
        });
    }

    updateComment(workoutId, comment) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/comments/${comment}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => console.log(resp));
        });
    }

    updateName(workoutId, name) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/workout_name/${name}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateDescription(workoutId, desc) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/workout_desc/${desc}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateFocus(workoutId, focus) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/category/${focus}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateIntensity(workoutId, intensity) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/intensity/${intensity}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateLength(workoutId, length) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/workout_length/${length}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateExpertise(workoutId, exp) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/explevel/${exp}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateIntensity(workoutId, intensity) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/exercises/${workoutId}/intensity/${intensity}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    removeExercise(exerciseId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/exercises_delete/${exerciseId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}
