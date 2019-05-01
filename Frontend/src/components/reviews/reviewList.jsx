import React, { Component } from 'react';

export const ReviewList = (props) =>(
    <>
        <h4>Comment <span style={{opacity:0.5}}></span></h4>
        {props.reviews.length == 0 && <p>Leave a comment for the workout!</p>}
                <div class = "card">
                    <div class = "card-body">
                        <h4>{props.reviews}</h4>
                    </div>
                </div>
    </>
);

export default ReviewList;
