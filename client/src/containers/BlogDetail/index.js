import React, { Component } from 'react';

import axios from 'axios';

class BlogDetail extends Component {
    state = {
        blog: '',
        comments: [],
        userCommentField: ''
    }

    async componentDidMount() {
        this.getComments();
    }

    getComments = async () => {
        console.log("Im hit");
        const { id } = this.props.match.params;
        try {
            const commentResponse = await axios.get(`/api/blogs/comments/${id}`);
            const comments = commentResponse.data;
            const { blog } = comments[0]
            console.log(blog);
            console.log('I am comments', comments);
            this.setState({ blog, comments });
        } catch (e) {
            console.log(e);
        }
    }

    renderComments = () => {
        return this.state.comments.map(comment => {
            return <li key={comment.id}>{comment.comment}</li>
        });
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({ userCommentField: value });
    }

    handleSubmit = async event => {
        event.preventDefault();        
        const { userCommentField: comment } = this.state;
        try {
            const response = await axios.post(`/api/blogs/${this.props.match.params.id}`, { comment });                        
            this.getComments();
        } catch(e) {
            console.log(e);
        }        
    }

    render() {
        console.log(this.state.blog);

        return (
            <div>
                <h1>Blog Detail Page</h1>
                <h3>{this.state.blog}</h3>
                <h4>Comments</h4>
                <ul>
                    {this.renderComments()}
                </ul>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Leave a comment!</label>
                        <input                        
                            type="text"
                            value={this.state.userCommentField}
                            onChange={this.handleInputChange}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" />
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default BlogDetail;






