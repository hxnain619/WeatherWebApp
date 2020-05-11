import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { SetTheme } from './Theme';
import { WeatherIcon } from './WeatherIcon';
import { Carousel } from 'react-materialize';

export default class WeatherCard extends Component {
    constructor() {
        super();
        this.state = {
            CarouselItems: []
        }
    }
    componentDidMount() {
        setTimeout(() => SetTheme(), 0)
    }
    CarouselItems(weatherInfo) {
        let divs = []
        if (weatherInfo.forecast && weatherInfo.forecast.length > 0) {
            weatherInfo.forecast.forEach((data, key) => {

                let day = (new Date(data.dt * 1000).toTimeString()).substr(0, 5)
                divs.push(<Link key={key} className="carousel-item center" to="#!">
                    <div className="card">
                        <span className="days" >{day}</span>
                        <p className="further_weather">
                            {WeatherIcon(data.weather[0].main)} <br />
                            <span className="city" >{data.main.temp_max} <sup>o</sup>C</span> <br />
                            <span className="degree" >{data.weather[0].description}</span> <br /> <br />
                        </p>
                    </div>
                </Link>);

            })
        }
        return divs;
    }
    render() {
        let { AddToFav, weatherInfo } = this.props;

        return (<>
            {weatherInfo.length === 0 ?
                <div className="container">
                    <div className="weather_card card center not-found">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 368 368" style={{ enableBackground: "new 0 0 368 368" }} space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path d="M261.336,226.04c-3.296-2.952-8.36-2.664-11.296,0.624C233.352,245.312,209.288,256,184,256     c-25.28,0-49.352-10.688-66.04-29.336c-2.952-3.288-8-3.576-11.296-0.624c-3.296,2.944-3.568,8-0.624,11.296     C125.76,259.368,154.176,272,184,272c29.832,0,58.248-12.64,77.96-34.664C264.904,234.04,264.624,228.984,261.336,226.04z" />
                                        <path d="M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352     c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z" />
                                        <path d="M248,128c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8c0-13.232,10.768-24,24-24s24,10.768,24,24     c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8C288,145.944,270.056,128,248,128z" />
                                        <path d="M144,168c0,4.416,3.584,8,8,8s8-3.584,8-8c0-22.056-17.944-40-40-40c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8     s8-3.584,8-8c0-13.232,10.768-24,24-24S144,154.768,144,168z" />
                                    </g>
                                </g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                        <br />
                            Enter the city name to find out its weather.
                        </div>
                </div> :
                weatherInfo === 'not found' ?
                    <div className="container">
                        <div className="weather_card card center not-found">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="frown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path></svg>
                            <br /> Sorry, the specified city was not found.
                            </div>
                    </div>
                    : weatherInfo === 'no internet' ?
                        <div className="weather_card card center not-found">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="frown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path></svg>
                            <br /> you are not connected to the internet.
                            </div>
                        : <div className="weather_card card">
                            <div className="row">
                                <div className="col s6 m6 l6">
                                    <div className="col s4 m4 l4 center">
                                        {WeatherIcon(weatherInfo.main)}
                                    </div>
                                    <div className="col s6 m6 l6">
                                        <p style={{marginLeft: 10}}> <span className="city" >{weatherInfo.city}</span> <br />
                                            <span className="degree" >{weatherInfo.highestTemp}<sup>o</sup>C</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col s4 m4 l4 right">
                                    <span onClick={() => AddToFav(weatherInfo.city)} className="favorite tooltipped" data-position="bottom" data-tooltip="Add to your favorite list"><i className="material-icons">favorite_border</i></span>
                                </div>
                            </div>
                            <div className="center">
                                <span className="weather_name" >{weatherInfo.description}</span>
                            </div>
                            <Carousel
                                carouselId="Carousel-2"
                                images={this.CarouselItems(weatherInfo)}
                                options={{
                                    dist: -100,
                                    duration: 200,
                                    fullWidth: false,
                                    indicators: false,
                                    noWrap: false,
                                    numVisible: 5,
                                    onCycleTo: null,
                                    padding: 0,
                                    shift: 0
                                }}
                            />
                        </div>}
        </>)
    }
}