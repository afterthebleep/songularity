import React from 'react';
import Player from '../player';

const Card = props => {
    return(
        <div className="col-md-4">
            <div className="card text center">
                <Player visual={props.visual} />
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.visual.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;
