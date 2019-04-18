import React, { Component } from 'react';

export const ReviewList = (props) =>(
    <>
        <h4>Product Reviews <span style={{opacity:0.5}}>({props.reviews.length})</span></h4>
        {props.reviews.length ==0 && <p>Be the first to leave a review!</p>}
        <div>
            {
                props.reviews.map(r =>
                <div class = "card">
                    <div class = "card-header">
                        <p>{r.name}</p>
                    </div>
                    <div class = "card-body">
                        <p>{r.comment}</p>
                    </div>
                </div>
                )
            }
        </div>
    </>
);

export default ReviewList;