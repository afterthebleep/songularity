import React from 'react';
const axios = require('axios');

const Shadertoy = props => {
    const shadertoy_api_key = '';
    const { shaderId } = props;

    let req_url = `https://www.shadertoy.com/api/v1/shaders/${shaderId}?key=${shadertoy_api_key}`;
    axios.get(req_url)
        .then(response => { console.log(response); })
        .catch(err => { console.log(err); });
    return (
        <>
            <div className="shadertoy">
                <img className="card-img-top" src={`./assets/images/thumbnails/${props.thumbnail}`} alt="" />
            </div>
            <code></code>
        </>
    );
};

export default Shadertoy;
