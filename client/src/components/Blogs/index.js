import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return props.blogs.map(blog => {
        return <p  key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.blog}</Link></p>
    });
}