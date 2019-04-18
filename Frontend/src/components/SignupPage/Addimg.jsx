import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Addimg.css';

export const Addimg = props =>(
    <>
        <h1 class="imghead">Upload Avatar:</h1>
        <img src="https://placehold.it/150x150" width="150" height="150"></img>
        <div className="form-group">
            <label htmlFor="img"></label>
            <input type="text" name="Img" id="addimg" placeholder="Add image link here"></input>
        </div>
    </>
);

export default Addimg;