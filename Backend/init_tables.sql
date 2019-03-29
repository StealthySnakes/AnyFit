use anyfit;

CREATE TABLE user_info (
    user_id INT PRIMARY KEY,
    username VARCHAR(40),
    _name VARCHAR(14),
    _password VARCHAR(40),
    avatar VARCHAR(250)
);

CREATE TABLE friends (
    user_id INT PRIMARY KEY,
    username VARCHAR(40),
    friend_id INT,
    f_username VARCHAR(40)
   -- FOREIGN KEY(user_id) REFERENCES user_info(user_id),
    -- FOREIGN KEY(username) REFERENCES user_info(username)
);

CREATE TABLE user_workout (
    user_id INT PRIMARY KEY,
    username VARCHAR(40),
    workout_id INT,
    FOREIGN KEY(user_id) REFERENCES user_info(user_id),
    FOREIGN KEY(workout_id) REFERENCES workout_info(workout_id)
);

CREATE TABLE workout_info (
    workout_id INT PRIMARY KEY,
    exercise_id INT,
    set_count INT,
    rep_count INT,
    workout_length INT,
    workout_desc VARCHAR(250),
    FOREIGN KEY(exercise_id) REFERENCES exercise(exercise_id)
);

CREATE TABLE exercise (
    exercise_id INT PRIMARY KEY,
    exercise_name VARCHAR(40),
    exercise_desc VARCHAR(250),
    default_length INT
);




