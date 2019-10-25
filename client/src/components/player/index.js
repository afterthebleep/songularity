import React, {Component} from 'react';
import Shadertoy from '../shadertoy';
import YouTube from 'react-youtube';
import './style.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Shader: {},
            playing: false
        }
    }

    togglePlay = () => this.setState({
        playing: !this.state.playing
    });

    playVisual = () => this.setState({
        playing: true
    });

    passThis = (e) => {
        console.log('playing');
        console.log(e.target);
        this.playVisual();
        e.target.playVideo();
    };

    render = () => {
        const { Shader } = this.state;
        let shaderCode = '';
        if (Shader.hasOwnProperty('renderpass')) {
            shaderCode = Shader.renderpass[0].code;
        }
        return (
            <div className="visual-player" onClick={this.togglePlay}>
                <Shadertoy
                    shaderId={this.props.visual.shaderId}
                    thumbnail={this.props.visual.thumbnail}
                    playing={this.state.playing}
                />
                <YouTube
                    videoId={this.props.visual.musicId}
                    onReady={this.passThis}
                    className="music-player"
                />
            </div>
        );
    };
}

export default Player;
