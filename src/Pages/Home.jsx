import React, { Component } from 'react';
import { SetTheme } from '../Components/Theme';
import Nav from '../Components/nav';
import WeatherCard from '../Components/weatherCard';
import { API_KEY } from '../Config/config';
import { Loader } from '../Components/loader';
import M from 'materialize-css'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            weatherInfo: [],
            loading: false
        }
    }
    componentDidMount() {
        let weather = JSON.parse(localStorage.getItem('weatherInfo'));

        SetTheme()
        this.setState({ weatherInfo: weather && weather.length > 0 ? weather[0] : [] })
    }
    componentWillMount() {
        SetTheme()
    }
    AddToFav = (currentItem) => {
        let fav = JSON.parse(window.localStorage.getItem('fav'));

        if (fav) {
            if (fav.length !== 0 && fav.filter(item => item === currentItem).length === 0) {
                fav.push(currentItem)
                M.toast({ html: 'Added to your Fav list.' })
            } else {
                M.toast({ html: 'Already exists on your fav list' })
            }
        } else {
            fav = [currentItem]
            M.toast({ html: 'Added to your Fav list.' })
        }
        window.localStorage.setItem('fav', JSON.stringify(fav));
    }
    render() {

        return (<div className="weather_app">
            <Nav />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="container">
                    <div className="input-field col s6 ">
                        <i className="material-icons prefix">search</i>
                        <input id="icon_prefix" type="text" onKeyDown={(e) => e.keyCode === 13 ? this.Search(e) : null} className="validate" />
                        <label htmlFor="icon_prefix">Enter City Name</label>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l12">
                        {this.state.loading ? <Loader /> : !this.state.loading && this.state.weatherInfo ? <WeatherCard AddToFav={this.AddToFav} weatherInfo={this.state.weatherInfo} /> :
                            <WeatherCard weatherInfo={this.state.weatherInfo} />}

                    </div>
                </div>
            </div>
        </div>)
    }
    Search = (e) => {
        e.preventDefault()
        let val = e.currentTarget.value;
        let checkTheCity = JSON.parse(localStorage.getItem('weatherInfo'));
        let FilterCity = checkTheCity && checkTheCity.filter(city => city.city.toLowerCase() === val.toLowerCase());

        if (!checkTheCity || (val && val.length !== 0 && checkTheCity && checkTheCity.length !== 0 && FilterCity.length === 0)) {
            this.FetchWeatherData(val, checkTheCity);
        } else if (FilterCity.length !== 0) {
            this.setState({ weatherInfo: FilterCity[0] })
        } else if (!val) {
            M.toast({ html: 'Pease e    nter city name' })
        } else {
            this.setState({ weatherInfo: [] })
        }

    }

    FetchWeatherData = async (data, weatherFromDB) => {
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${data}&APPID=${API_KEY}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${data}&APPID=${API_KEY}&units=metric`;

        if (!weatherFromDB) {
            weatherFromDB = []
        }
        this.setState({ loading: true })
        await Promise.all([fetch(weather), fetch(forecast)])
            .then(([res1, res2]) => {
                if (res1.ok && res2.ok) {
                    this.setState({ loading: false })
                    return Promise.all([res1.json(), res2.json()]);
                } else if (res1.response === 404) {
                    this.setState({ weatherInfo: 'not found', loading: false })
                }
            })
            .then(([data1, data2]) => {
                if (data1 && data1.sys && data1.name.toLowerCase() === data.toLowerCase()) {

                    const months = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'Nocvember',
                        'December',
                    ];
                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const currentDate = new Date();
                    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
                        months[currentDate.getMonth()]
                        }`;
                    const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
                    const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

                    let weatherInfo = {
                        city: data1.name,
                        country: data1.sys.country,
                        date,
                        description: data1.weather[0].description,
                        main: data1.weather[0].main,
                        temp: data1.main.temp,
                        highestTemp: data1.main.temp_max,
                        lowestTemp: data1.main.temp_min,
                        sunrise,
                        sunset,
                        clouds: data1.clouds.all,
                        humidity: data1.main.humidity,
                        wind: data1.wind.speed,
                        forecast: data2.list,
                    };
                    weatherFromDB.push(weatherInfo)
                    localStorage.setItem('weatherInfo', JSON.stringify(weatherFromDB))
                    this.setState({ weatherInfo });
                } else {
                    this.setState({ weatherInfo: 'not found', loading: false })
                }
            })
            .catch(err => {
                if (err.message === 'undefined is not iterable (cannot read property Symbol(Symbol.iterator))') {
                    this.setState({ weatherInfo: 'not found', loading: false })
                } else {
                    this.setState({ weatherInfo: 'no internet', loading: false })
                }
            })
    }
} 