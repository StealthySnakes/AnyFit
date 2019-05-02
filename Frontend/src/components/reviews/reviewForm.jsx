import React, { Component } from 'react';
import ReviewList from './reviewList';
import Rating from './../Rating';
import Comment from './../../models/Comment';

export class ReviewForm extends React.Component {
    state = {
        comment:""
    }

    onSubmit(){
        this.props.onNewReview(this.state.comment);
        this.setState({
            comment:""
        });

    }


    render(){
        return(
        <div>
            <div>
                <ReviewList reviews ={this.props.reviews}/>
            </div>
    
            <div class = "card ">
                <h5 class = "card-header bg-secondary text-white">Replace Comment</h5>
                <form style = {{margin:'1em'}}>
                    <div class = "form-group" style={{float:'left',width:'100%', display:'block'}}>
                        <label for="comment"></label>
                        <textarea class = "form-control" rows='10' id='comment' value={this.state.comment} onChange={e => this.setState({comment: e.target.value})}></textarea>
                    </div>
                    <div class = "form-group" style={{textAlign: 'center'}}>
                    <button type="button" class="btn btn-primary btn-lg" style={{width: '40%'}} onClick={e => this.onSubmit()}>Submit</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default ReviewForm;
