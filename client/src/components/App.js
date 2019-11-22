import React, { Component } from 'react';
import { Header, Footer } from './global';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Dashboard } from './pages';
class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/" exact component={Home} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
