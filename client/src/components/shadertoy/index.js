import React, {Component} from 'react';
import ShadertoyReact from 'shadertoy-react';
const axios = require('axios');

const shadertoy_api_key = 'rdHtM7';

class Shadertoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Shader: {},
            playing: false
        }
    }

    componentDidMount() {
        let req_url = `https://www.shadertoy.com/api/v1/shaders/${this.props.shaderId}?key=${shadertoy_api_key}`;
        axios.get(req_url)
            .then(response => {
                let {Shader} = response.data;
                this.setState({Shader: Shader});
                console.log(this.state.Shader);
            })
            .catch(err => {
                console.log(err);
            });
    };

    playShader = () => this.setState({ playing: true });
    stopShader = () => this.setState( { playing: false });

    render = () => {
        const { Shader } = this.state;
        const shaderCode = '';
        return (
            this.state.playing?
                <div onClick={this.stopShader}>
                    <ShadertoyReact  shader={shaderCode} />
                </div>
                :
                <div className="shadertoy" onClick={this.playShader}>
                    <img className="card-img-top" src={`./assets/images/thumbnails/${this.props.thumbnail}`} alt="" />
                </div>
        );
    };
}

export default Shadertoy;
