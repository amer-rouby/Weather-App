import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForm from "./WeatherForm";
import getIcon from '../assels/getIcon';

const API_key = "429736441cf3572838aa10530929f7cd";

const Weather = () => {
    
    const [weather, setWeather] = useState ({
        city: '',
        country: '',
        icon: '',
        main: '',
        celsius: '',
        tempMax: '',
        tempMin: '',
        description: '',
        error: false,
    });

    const calcCelsius = (temp) => {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    const setError = () => {
        setWeather({...weather, error: false});
    }

    const getWeather = async (city, country) =>{
        if(city && country){
            const cityWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
            const response = await cityWeather.json();

            setWeather(
                { ...weather,
                    city: `${response.name}, ${response.sys.country}`,
                    celsius: calcCelsius(response.main.temp),
                    tempMax: calcCelsius(response.main.temp_max),
                    tempMin: calcCelsius(response.main.temp_min),
                    description: response.weather[0].description,
                    error: false,
                    country,
                    icon: getIcon(response.weather[0].id)
            });

        } else {
          setWeather({...weather, error: true});
        }
    
    } 

    return ( 
        <div>
            <WeatherForm
                loadweather={getWeather} 
                error={weather.error}
                setError={setError}
            />
            <WeatherInfo
                weather={weather}
            />
        </div>
     );
}
 
export default Weather;