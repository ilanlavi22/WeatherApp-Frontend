const WeatherWrapper = ({ weatherData, coverPhoto, forecastData }) => {
  const { name, main, weather } = weatherData

  return (
    <>
      <main>
        <div className='weather-main'>
          <img src={ `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png` } alt={ weather[0].description } />
          <p>
            <span>{ name }</span>
            <span>{ main.temp.toFixed() }&#8451;</span>
          </p>
        </div>
        <aside>{ weather[0].description }</aside>
      </main>

      <div className='weather-info'>
        <div>
          <span>{ Math.round(main.feels_like) }&#8451;</span>
          <span>Feels Like</span>
        </div>

        <div>
          <span>{ weatherData.main.humidity } &#37;</span>
          <span>Humidity</span>
        </div>

        <div>
          <span>{ weatherData.visibility / 1000 } km</span>
          <span>Wind</span>
        </div>
      </div>

      <div className='img-copy'>{ `${coverPhoto[0]?.description} ${coverPhoto[0]?.user.name}` }</div>

      {/* { forecastData?.list && forecastData.list.map((day) => {
        return (
          <div key={ day.dt }>
            { day.dt_txt }
            { day.main.feels_like }
          </div>
        )

      }) } */}
    </>
  );

}

export default WeatherWrapper;