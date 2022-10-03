import React, { useState, useEffect } from 'react';
import axios from "axios";


function Weather() {

    const [weather, setweather] = useState(1);

    function getWeather() {
        const options = {
            method: 'GET',
            url: 'https://dark-sky.p.rapidapi.com/33.42,-111.94',
            params: { units: 'auto', lang: 'en' },
            headers: {
                'X-RapidAPI-Key': 'eb6624bd51msh7ccbdefd0d86ccfp1e1666jsn8eee42450d71',
                'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.currently.temperature);
            setweather(response.data.currently.temperature);
        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {
        getWeather();
    }, []);


    return(
        <h5 style={{color: "white"}}>Tempe temperature: {weather} °F</h5>
    );

}

export default Weather;