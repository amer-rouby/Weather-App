import React, { useState } from 'react'
import "./form-style.css";

const WeatherForm = (props) => {
    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');

    const {loadweather, setError} = props;
    
    const onSubmit = e => {
        e.preventDefault();
        loadweather(city, country);
    }

    return (
        <div className="container">
            <div className="">{props.error ? error() : null}</div>
           <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" 
                            className="form-control" 
                            name="city" 
                            autoComplete="off"
                            placeholder="City"
                            value={city}
                            onChange={e => {setError(); setCity(e.target.value)}}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text" 
                            className="form-control" 
                            name="country" 
                            autoComplete="off"
                            placeholder="Country"
                            value={country}
                            onChange={e => {setError(); setCountry(e.target.value)}}
                        />
                    </div>
                    <div className="col-md-3 mt-md-0 py-2 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
           </form>
        </div>
    )
}

const error = () => {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    );
}

export default WeatherForm;
