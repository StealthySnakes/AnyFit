use anyfit;

CREATE TABLE user_info (
    user_id INT PRIMARY KEY,
    username VARCHAR(40),
    _name VARCHAR(14),
    _password VARCHAR(40),
    avatar VARCHAR(250),
    user_bio VARCHAR(250)
);

CREATE TABLE friends (
    user_id INT PRIMARY KEY,
    friend_id INT,
    f_username VARCHAR(40)
);

CREATE TABLE user_workout (
    user_id INT PRIMARY KEY,
    workout_id INT,
    past_workout BOOLEAN,
    favorite_workout BOOLEAN,
    custom_workout BOOLEAN,
    workout_counter INT,
    workout_length INT,
    workout_desc VARCHAR(250),
    workout_name VARCHAR(40),
    rating INT,
    category VARCHAR(40),
    intensity INT,
    ExpLevel VARCHAR(40),
    comments VARCHAR(250),
    visibility BOOLEAN,
    Time_stamp DATETIME,
    FOREIGN KEY(user_id) REFERENCES user_info(user_id),
    FOREIGN KEY(workout_id) REFERENCES workout_info(workout_id)
);

CREATE TABLE workout_info (
    workout_id INT,
    exercise_id INT,
    set_count INT,
    rep_count INT,
    PRIMARY KEY( workout_id, exercise_id),
    FOREIGN KEY(exercise_id) REFERENCES exercise(exercise_id)
);

CREATE TABLE exercise (
    exercise_id INT PRIMARY KEY,
    exercise_name VARCHAR(40),
    exercise_desc VARCHAR(250),
    default_length INT,
    exercise_image longtext
    
);
