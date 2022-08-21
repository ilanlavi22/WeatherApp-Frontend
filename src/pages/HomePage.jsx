import { useState, useEffect } from "react";
import { loadWeather, loadForecast, loadPhoto } from "../api";
import { Wrapper } from '../styles/home';
import SearchForm from "../components/SearchForm";
import WeatherWrapper from "../components/WeatherWrapper";

const HomePage = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState('');
  const [query, setQuery] = useState('berlin');

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(query);
    getPhoto();
    getWeather();
    //getForecast();
    setQuery('')
  }

  const getWeather = () => {
    loadWeather(query)
      .then((result) => {
        setWeatherData(result)
      })
      .catch((err) => console.log(err.result))
  }

  const getForecast = () => {
    loadForecast(query)
      .then((result) => {
        setForecastData(result)
      })
      .catch((err) => console.log(err.result))
  }

  const getPhoto = () => {
    loadPhoto(query)
      .then((result) => {
        setCoverPhoto(result)
      }).catch((err) => console.log(err.result))
  }

  useEffect(() => {
    getPhoto()
    getWeather()
    //getForecast()
  }, [])

  return (

    <Wrapper style={ { backgroundImage: `url(${coverPhoto[0]?.urls.regular})` } }>
      <section>
        <h1>Your Weather</h1>
        <SearchForm query={ query } setQuery={ setQuery } submitHandler={ submitHandler } />

        { weatherData && (
          <WeatherWrapper weatherData={ weatherData } forecastData={ forecastData } coverPhoto={ coverPhoto } />
        ) }
      </section>
    </Wrapper>
  );
}

export default HomePage;




