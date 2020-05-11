import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Favorite from '../Pages/Favorite'
import { SetTheme } from '../Components/Theme';
import M from 'materialize-css'
import { NotFound } from '../Pages/404';

export default class Routes extends React.Component {
    componentDidMount() {
        let tooltip = document.querySelectorAll('.tooltipped');
        let carousel = document.querySelectorAll('.carousel');
  
        M.Carousel.init(carousel);
        M.Tooltip.init(tooltip)
        SetTheme()
    }
    render() {
        return (<BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorite" component={Favorite} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>)
    }
}