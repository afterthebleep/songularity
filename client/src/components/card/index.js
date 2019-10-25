import React from 'react';
import Shadertoy from '../shadertoy';
import '../cards/style.css'

const Card = props => {
    return(
        <div className="col-md-4">
            <div className="card text center">
                <Shadertoy shaderId={props.visual.shaderId} thumbnail={props.visual.thumbnail} />
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.visual.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;
