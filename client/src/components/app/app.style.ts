import styled from "styled-components/macro";

export const Container = styled.div`
  width: 70%;
  max-width: 65rem;
  height: 100%;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  @media (max-width: 650px) {
    width: 90%;
  }
`;
export const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap");
  font-family: "Ubuntu", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.2s all;
`;
