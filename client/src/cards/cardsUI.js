import React from 'react';
import './style.css'

const Card = props => {
  return (
    <div className="card text center">
      <div className="overflow">
        < img className="card-img-top" src="./assets/images/thumbnails/eq_IMG.jpg" alt="" />
      </div>

      <div className="card-body text-dark">

        <h4 className="card-title">Title</h4>

        <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sequi vel culpa saepe? A, dolore possimus dolorum, voluptatibus, consequuntur consequatur ipsam incidunt omnis atque delectus nam nostrum. Consequuntur, quis molestiae!</p>
      </div>
    </div>
  );
}

export default Card;