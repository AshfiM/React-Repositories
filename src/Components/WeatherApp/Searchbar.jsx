import React, { useState, useEffect } from "react";
import Location from "./Location";
import "/Users/ashfi/Documents/My Websites/weather-app/src/Components/Style/Searchbar.css"
import "/Users/ashfi/Documents/My Websites/weather-app/src/Components/Style/Location.css"



const SearchBar = ({APIKEY}) => {
    const [city, setCity] = useState("")
    const [updatedCity, setUpdatedCity] = useState("karachi")
    const [lat, setLat] = useState("6.9387469")
    const [lon, setLon] = useState("67.0207055")
    
    const apiKey = APIKEY

    useEffect(() => {
        const fetchCity = async() => {
        const cityAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${updatedCity}&appid=${apiKey}`    
            try {
                
                const response = await fetch(cityAPIurl);
                const cityDetails = await response.json();
                setCity(cityDetails[0])
                setLat(cityDetails[0].lat)
                setLon(cityDetails[0].lon)
           
            } catch (error) {
            console.log("error", error)
            }

        }
        fetchCity()

    },[updatedCity, lat, lon, apiKey])

    const onCityChange = newCity => {
        setCity(newCity.target.value)
  
    } 

    const onButtonClick = () => {
        if (updatedCity === city) {
            alert("error")
        }
        else{
            setUpdatedCity(city)
        }
    }

    return (
        <div className="UI">
            <div className="top-bar">
            <input type="text" placeholder="City Name" onChange={onCityChange}  ></input>
            <button onClick={onButtonClick} type="submit" className="find-button">FIND</button>
            </div>
            
            <div className="city-details">
                City : {city.name}<br/>
                Latitude: {lat}<br/>
                Longitude: {lon}
            </div> 
            <Location lati={lat} longi={lon} APIKEY={APIKEY}/>
            
        

            
    
        </div>
    )
     
 

}

export default SearchBar
