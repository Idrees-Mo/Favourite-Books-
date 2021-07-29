import styled from "styled-components/macro";

export const Wraper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ::after {
    content: "";
    flex: auto;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spiner = styled.div`
  border: 5px solid #111;
  border-radius: 50%;
  border-top: 5px solid #8ecae6;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
