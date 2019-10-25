import React, {Component} from 'react';
import ShadertoyReact from 'shadertoy-react';
import axios from 'axios';

const shadertoy_api_key = 'rdHtM7';

class Shadertoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Shader: {}
        }
    }

    componentDidMount() {
        let req_url = `https://www.shadertoy.com/api/v1/shaders/${this.props.shaderId}?key=${shadertoy_api_key}`;
        axios.get(req_url)
            .then(response => {
                console.log(response);
                let {Shader} = response.data;
                this.setState({Shader: Shader});
                console.log(this.state.Shader);
            })
            .catch(err => {
                console.log(err);
            });
    };

    shaderFunc = () => {
        const { Shader } = this.state;
        let shaderCode = '';
        if (Object.keys(Shader).length !== 0) {
            console.log(Shader);
            shaderCode = Shader.renderpass[0].code;
        }
        console.log('func');
        //eval(shaderCode);
    };

    render = () => {
        const { Shader } = this.state;
        let shaderCode = '';
        if (Object.keys(Shader).length !== 0) {
            console.log(Shader);
            shaderCode = Shader.renderpass[0].code;
        }
        return (
            this.props.playing?
                    <ShadertoyReact fs={shaderCode} />
                :
                    <img className="card-img-top" src={`./assets/images/thumbnails/${this.props.thumbnail}`} alt="" />
        );
    };
}

export default Shadertoy;
