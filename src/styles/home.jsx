import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  background: no-repeat center center/cover;
  min-height: 100vh; /* fall-back */

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
  }
  section {
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem;
    z-index: 1;
    width: 100%;
    min-height: 100vh; /* fall-back */

    h1 {
      align-self: center;
      color: #fff;
      font-weight: 700;
      font-size: 32px;
      padding-block: 1.5rem;
    }
  }
  form {
    display: flex;
    width: 100%;
    justify-content: center;

    input {
      width: 100%;
      padding: 0.85rem;
      max-width: 700px;
      display: flex;
      border-radius: 10px;
      border: none;
      outline: none;
      font-family: inherit;
      color: #fff;
      font-size: 1rem;
      background-color: rgba(255, 255, 255, 0.4);

      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #fff;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #fff;
      }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-block: 3rem;
    gap: 1rem;
  }
  .weather-main {
    min-width: 185px;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(101deg, rgba(255, 255, 255, 0.26) 15.94%, rgba(255, 255, 255, 0) 108.11%);
    border: 1px solid rgba(255, 255, 255, 0.68);
    box-shadow: 0px -1px 20px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-radius: 50%;

    img {
      transform: translateY(-5px);
    }

    p {
      color: #fff;
      display: flex;
      flex-direction: column;
      transform: translateY(-15px);
      line-height: 1;

      span:first-of-type {
        font-weight: 400;
        font-size: 1.3rem;
      }
      span:last-of-type {
        font-size: 2.8rem;
        font-weight: 900;
      }
    }
  }
  aside {
    /* transform: rotate(90deg); */
    color: #fff;
    font-weight: 400;
    font-size: 1.3rem;
  }

  .weather-info {
    width: 100%;
    max-width: 400px;
    padding: 0.85rem;
    display: flex;
    align-self: center;
    justify-content: space-between;
    background: linear-gradient(101deg, rgba(255, 255, 255, 0.26) 15.94%, rgba(255, 255, 255, 0) 108.11%);
    border: 1px solid rgba(255, 255, 255, 0.68);
    box-shadow: 0px -1px 10px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-radius: 10px;
    margin-top: auto;
    transform: translateY(-20px);

    & > div {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      span:first-of-type {
        font-weight: 900;
        font-size: 20px;
      }
      span:last-of-type {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
  .img-copy {
    color: rgba(255, 255, 255, 0.8);
    max-width: 200px;
    font-size: 0.9rem;
    align-self: flex-start;
    margin-top: auto;
  }

  @media (pointer: coarse) {
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;

    section {
      min-height: -moz-available;
      min-height: -webkit-fill-available;
      min-height: fill-available;
    }
  }

  @media screen and (min-width: 50rem) {
    main {
      position: relative;
      flex-direction: row;
      justify-content: center;
      margin-top: 8rem;
    }
    aside {
      position: absolute;
      top: 50%;
      right: 0;
      transform: rotate(90deg) translateY(-50%);
      letter-spacing: 0.05rem;
      color: rgba(255,255,255,0.8);
    }
  }
`;

/* Rectangle 3 */
