import React, {Component} from 'react';
import Card from '../card';
import './style.css';

class Cards extends Component {
    render() {
        let avs = [
            // {
            //     title: 'One',
            //     thumbnail: 'eq_IMG.jpg',
            //     shaderId: 'MsBSzw',
            //     musicId: 'uaJ0Bx89VvI',
            // },
            // {
            //     title: 'Two',
            //     thumbnail: 'eq_IMG.jpg',
            //     shaderId: '4lS3W3',
            //     musicId: 'uaJ0Bx89VvI',
            // },
            {
                title: 'Three',
                thumbnail: 'eq_IMG.jpg',
                shaderId: 'llB3W1',
                musicId: 'uaJ0Bx89VvI',
            }
        ];
        return (
            <div className="container-fluid d-flex justify-content-center">
                { avs.map((av, i) => { return <Card key={i} visual={av} /> })}
            </div>
        );
    }
}

export default Cards;
