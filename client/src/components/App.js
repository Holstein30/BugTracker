import React, { Component } from 'react';
import { Header, Footer } from './global';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Howdy</h1>
                <Footer />
            </div>
        );
    }
}

export default App;
