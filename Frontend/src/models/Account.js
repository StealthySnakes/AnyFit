export class Account {

    customWorkouts = [];
    favorites = [];
    history = [];
    friends = [];
    avatar = 'http://placehold.it/240x240';
    bio = 'Tell the world about yourself';

    constructor(id, userName, password, avatar, bio, friends, customWorkouts, favorites, history) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.avatar = avatar;
        this.bio = bio;
        this.friends = friends;
        this.customWorkouts = customWorkouts;
        this.favorites = favorites;
        this.history = history;
    }
}

export default Account;