import React from 'react'

export const WeatherIcon = (icon) => {
    return (<>
        {icon === 'Clouds' ?
            <i className="wi wi-day-cloudy"></i> :
            icon === 'Thunderstorm' ?
                <i className="wi wi-day-thunderstorm"></i> :
                icon === 'Drizzle' ?
                    <i className="wi wi-day-showers"></i> :
                    icon === 'Rain' ?
                        <i className="wi wi-day-sprinkle"></i> :
                        icon === 'Snow' ?
                            <i className="wi wi-day-snow"></i> :
                            icon === 'Clear' ?
                                <i className="wi wi-day-sunny-overcast"></i> :
                                icon === 'Clouds' ?
                                    <i className="wi wi-day-cloudy-high"></i> :
                                    <i className="wi wi-day-sunny"></i>}
    </>
    )
}
