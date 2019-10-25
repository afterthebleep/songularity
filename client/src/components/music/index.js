import React, {Component} from 'react';
import YouTube from 'react-youtube';
import './style.css';

class Music extends YouTube {
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.playing) {

        }
    }
}

export default Music;
