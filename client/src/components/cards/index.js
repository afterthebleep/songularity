import React, {Component} from 'react';
import Card from '../card';

class Cards extends Component {
    render() {
        let avs = [
            {
                title: 'One',
                thumbnail: 'eq_IMG.jpg'
            },
            {
                title: 'Two',
                thumbnail: 'eq_IMG.jpg'
            },
            {
                title: 'Three',
                thumbnail: 'eq_IMG.jpg'
            }
        ];
        return (
            <div className="container-fluid d-flex justify-content-center">
                { avs.map((av, i) => { return <Card index={i} title={av.title} thumbnail={av.thumbnail}/> })}
            </div>
        );
    }
}

export default Cards;
