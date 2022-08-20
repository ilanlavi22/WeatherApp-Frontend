import { Wrapper } from '../styles/home';
const HomePage = () => {
  return (
    <Wrapper>
      <section>
        <h1>Your Weather</h1>
        <form>
          <input type='text' placeholder='Location' />
        </form>

        <main>
          <div className='weather-main'>
            <img src='http://openweathermap.org/img/wn/10d@2x.png' alt='' />
            <p>
              <span>Berlin</span>
              <span>30F</span>
            </p>
          </div>
          <aside>Cloudy Sky</aside>
        </main>

        <div className='weather-info'>
          <div>
            <span>30F</span>
            <span>Feels Like</span>
          </div>

          <div>
            <span>30F</span>
            <span>Humidity</span>
          </div>

          <div>
            <span>30F</span>
            <span>Wind</span>
          </div>
        </div>

        <div className='img-copy'>Saint Seen It All Artwork by Carlos Aponte</div>
      </section>
    </Wrapper>
  );
};

export default HomePage;
