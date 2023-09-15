import React from "react";
import { useState, useEffect } from "react";
import "/Users/ashfi/Documents/My Websites/weather-app/src/Components/Style/Location.css"

const Location = ({lati, longi, APIKEY}) => {
    const [weather, setweather] = useState("")
    const [temp, setTemp] = useState("")
    const [humidity, sethumidity] = useState("")
    const [centigrade, setCentigrades] = useState("")
    const apiKey = APIKEY

    useEffect(() => {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}`
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setweather(json.main)
                setTemp(weather.temp)
                setCentigrades(temp)
                sethumidity(weather.humidity)
                } catch (error) {
                console.log("error", error);
                }
                
        }

        fetchData()
    }, [lati, longi, weather.temp, temp, weather.humidity, apiKey])


    return (
        <div className="weather-details">
            <div>
                <h3>Weather Details</h3>
                Temparature: {temp} K OR {Math.round(parseInt(centigrade) - 273)} C<br/>
                Humidity: {humidity} %
            </div>
        </div>
    )

    
}



export default Location