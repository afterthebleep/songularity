import React from 'react';

const Shadertoy = props => {
    return(
        <>
            <div className="shadertoy">
                <img className="card-img-top" src={`./assets/images/thumbnails/${props.thumbnail}`} alt="" />
            </div>
        </>
    );
};

export default Shadertoy;
