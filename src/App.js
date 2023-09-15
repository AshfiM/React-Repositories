import SearchBar from './Components/WeatherApp/Searchbar';
import "./App.css"

export default function MyApp() {
    //OpenWeatherAPIKey 
    const APIKEY = ""
  return (<>
    <h1>Weather App</h1>
    <SearchBar APIKEY={APIKEY}/>
    </>
  )

}
