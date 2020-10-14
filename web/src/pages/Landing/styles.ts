import styled from 'styled-components';

import landing from '../../assets/landing.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  background: url(${landing}) no-repeat 80% center;

  main {
    max-width: 350px;
  }

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  div {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;
    text-align: right;

    strong {
      font-weight: 800;
    }
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background-color: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s;

    :hover {
      background-color: #96feff;
    }
  }
`;
