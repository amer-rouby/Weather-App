import React from 'react'

const WeatherInfo = (props) => {
    const {city, icon, celsius, tempMin, tempMax, description} = props.weather;
    return (
        <div className="container text-light">
            <div className="cards">
                <h1>
                    {city}
                </h1>
            </div>
            <h5 className="py-4">
                <i className={`wi ${icon} display-1`}></i>
            </h5>
            {celsius ? (<h1 className="py-2">{celsius}&deg;</h1>): null}

            {/**show max and min temp**/}
            {minmaxTemp(tempMin, tempMax)}
            <h4 className="py-3">{description}</h4>
        </div>
    )
}

const minmaxTemp = (min, max) => {
    if(min && max){
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

export default WeatherInfo;
