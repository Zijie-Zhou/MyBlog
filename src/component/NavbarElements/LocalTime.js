import React, { useState, useEffect } from 'react';
import axios from "axios";


function LocalTime() {

    const [time, setTime] = useState("0000");

    function getTime() {
        const options = {
            method: 'GET',
            url: 'https://world-time2.p.rapidapi.com/timezone/America/Phoenix',
            headers: {
                'X-RapidAPI-Key': 'eb6624bd51msh7ccbdefd0d86ccfp1e1666jsn8eee42450d71',
                'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setTime(response.data.datetime);

        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {

        getTime();


    }, []);


    let date = time.substring(0, 10);

    let times = time.substring(11, 16);

    return (
        <h5 style={{ color: "white" }}>AZ Time: {times} &nbsp;{date}</h5>
    );

}

export default LocalTime;