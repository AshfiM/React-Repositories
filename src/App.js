import SearchBar from './Components/WeatherApp/Searchbar';
import "./App.css"

export default function MyApp() {
    //OpenWeatherAPIKey 
    const APIKEY = "1d8f9dd146c6fac9dc4e77a3c9a3c723"
  return (<>
    <h1>Weather App</h1>
    <SearchBar APIKEY={APIKEY}/>
    </>
  )

}
