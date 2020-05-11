import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ChangeTheme } from './Theme';
import M from 'materialize-css'

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
        let sidebar = document.querySelectorAll('.sidenav');
        let tooltip = document.querySelectorAll('.tooltipped');

        M.Sidenav.init(sidebar)
        M.Tooltip.init(tooltip)
    }
    render() {

        return (<div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Weather App</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                        <li className="tooltipped" data-position="bottom" data-tooltip="Toggle dark/light theme"><Link to="#!" onClick={ChangeTheme} ><i className="material-icons">settings</i></Link></li>
                    </ul>
                    <Link to="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li className="sidebar_logo center" onClick={ChangeTheme}>Weather App <i className="material-icons">settings</i></li>
                <li><div className="divider"></div></li>
                <li><Link to="/">Home</Link></li>
                <li><div className="divider"></div></li>
                <li><Link className="waves-effect" to="favorite">Favorite <span className="badge">{this.state.favItem}</span></Link></li>
                <li><div className="divider"></div></li>
            </ul>

        </div>)
    }
}