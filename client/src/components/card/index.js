import React from 'react';
import Shadertoy from '../shadertoy';
import '../cards/style.css'

const Card = props => {
    return(
        <div className="col-md-4">
            <div className="card text center">
                <Shadertoy shaderId={props.shadertoy_id} thumbnail={props.thumbnail} />
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;
