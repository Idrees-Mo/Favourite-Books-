import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 9rem;
  height: 13rem;
  background-color: red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1rem;

  background-size: cover;
  background-position: center;
  object-fit: center;

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    cursor: pointer;

    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  }
`;
export const Cover = styled.div`
  width: 100%;
  height: 80%;
  background-color: green;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-size: cover;
  background-position: center;
  object-fit: center;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20%;
  font-size: small;
  font-weight: bold;
  color: #535657;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
