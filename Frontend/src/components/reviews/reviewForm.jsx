import React, { Component } from 'react';
import ReviewList from './reviewList';
import Rating from './../Rating';
import Comment from './../../models/Comment';

export class ReviewForm extends React.Component {
    state = {
        userName:"",
        comment:""
    }

    onSubmit(){
        var curRev = new Comment(this.state.userName, this.state.comment);
        this.props.onNewReview(curRev);
        this.setState({
            userName:"",
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
                <h5 class = "card-header bg-secondary text-white">Add Comment</h5>
                <form style = {{margin:'1em'}}>
                    <div class = "form-group" style = {{float:'left',display:'block', marginRight:'1em', width:'70%'}}>
                        <label for="name" style={{textAlign:'left'}}>Your Name</label>
                        <input type = "text" class = "form-control" value={this.state.userName} onChange={e => this.setState({userName: e.target.value})}></input>
                    </div>
                    <div class = "form-group" style={{float:'left',width:'100%', display:'block'}}>
                        <label for="comment">Comment</label>
                        <textarea class = "form-control" rows='10' id='comment' value={this.state.comment} onChange={e => this.setState({comment: e.target.value})}></textarea>
                    </div>
                    <div class = "form-group">
                    <button type="button" class="btn btn-primary btn-lg" onClick={e => this.onSubmit()}>Submit</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default ReviewForm;