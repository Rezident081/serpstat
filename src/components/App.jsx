import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import SinglePage from './SinglePage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/:id' component={SinglePage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
