import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Youtube from './routes/Youtube';
import About from './routes/About';

const Routes = () => (
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Home} />
            <Route exact path="/youtube" component={Youtube} />
            <Route exact path="/about" component={About} />
        </App>
    </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
