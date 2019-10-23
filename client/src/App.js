import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import containers
import BlogDetail from './containers/BlogDetail';

// Import Components
import Header from './components/Header';
import Nav from './components/Nav';
import Blog from './components/Blogs'

import axios from 'axios';

class App extends Component {
  state = {
  }

  componentDidMount() {
    // axios.get('/api/blogs')
    //   .then(response => {
    //     this.setState({ blogs: response.data });
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }

  render(){  
    return (
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Header}/>
          <Route exact path='/blogs' render={() => <Blog blogs={this.state.blogs}/> }/>
          <Route exact path='/blogs/:id' component={BlogDetail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
