import React, { Component } from 'react';
import { SetTheme } from '../Components/Theme';
import Nav from '../Components/nav';
import M from 'materialize-css'
import { WeatherIcon } from '../Components/WeatherIcon';

export default class Favorite extends Component {
    constructor() {
        super();
        this.state = {
            favItem: 0,
            favItems: []
        }
    }
    componentDidMount() {
        let favItem = JSON.parse(localStorage.getItem('fav'))

        this.setState({ favItem: favItem && favItem.length > 0 ? favItem.length : 0, favItems: favItem })
        setTimeout(() => SetTheme(), 0)
    }
    removeItem = (item, key) => {
        let fav = JSON.parse(localStorage.getItem('fav'));

        M.toast({ html: `${item} is removed from your list.` })
        fav = fav.filter((items, index) => items !== item && index !== key ? item : null)
        if (fav.length > 0) {
            localStorage.setItem('fav', JSON.stringify(fav));
        } else {
            localStorage.removeItem('fav')
        }

        this.setState({ favItem: fav.length, favItems: fav })
    }
    favCards = (item, key) => {
        let filter = JSON.parse(localStorage.getItem('weatherInfo')).filter(items => items.city === item);
        
        return <div className="col s9 m4 l4" key={key}>
            <div className="card" >
                <p className="further_weather center">
                    {WeatherIcon(filter[0].main)} <br />
                    <span className="city" >{filter[0].city}</span> <br />
                    <span className="degree" >{filter[0].highestTemp} <sup>o</sup>C</span><br /> <br />
                </p>
                <span className="days small" >{filter[0].date}</span>
                <span className="close" ><i onClick={() => this.removeItem(item, key)} className="material-icons tooltipped" data-position="bottom" data-tooltip="remove item">close</i> </span>
            </div>
        </div>
    }
    render() {

        return (<div>
            <Nav />
            <div className="container">
                <div className="row">
                    {this.state.favItems && this.state.favItems.length > 0 ? this.state.favItems.map((item, key) => this.favCards(item, key)) : null}
                    {!this.state.favItems || (this.state.favItems && this.state.favItems.length === 0) ? <div className="col s12 m12 l12 noItem">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="frown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path></svg>
                        <br /> There is nothing here.</div> : null}
                </div>
            </div>
        </div >)
    }
}