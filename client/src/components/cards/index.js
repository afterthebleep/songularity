import React, {Component} from 'react';
import Card from '../card';

class Cards extends Component {
    render() {
        let avs = [
            {
                title: 'One',
                thumbnail: 'eq_IMG.jpg',
                shaderId: 'MsBSzw'
            },
            {
                title: 'Two',
                thumbnail: 'eq_IMG.jpg',
                shaderId: '4lS3W3'
            },
            {
                title: 'Three',
                thumbnail: 'eq_IMG.jpg',
                shaderId: 'llB3W1'
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
