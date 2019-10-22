import React from 'react';


const Card = props => {
  return(
      <div className="card text center">
      <div className="overflow">
< img src = "/assets/eq_IMG.jpg" alt = "" />
      </div>
      
      <div className="card-body text-dark">
      
      <h4 className="card-title">Title</h4>
      
      <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sequi vel culpa saepe? A, dolore possimus dolorum, voluptatibus, consequuntur consequatur ipsam incidunt omnis atque delectus nam nostrum. Consequuntur, quis molestiae!</p>
      
      <div className="tracks">
        <ul>
          <li>Track 01</li>
          <li>Track 02</li>
          <li>Track 03</li>
          <li>Track 04</li>
        </ul>
      </div>
      <a href='#' className="btn btn-outline-success">Push my button</a>
      </div>
      </div>
  );
}

export default Card;