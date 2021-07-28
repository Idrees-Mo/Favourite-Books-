import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.8rem;
  background-color: #8ecae6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    justify-content: space-around;
  }
`;

export const Wrapper = styled.div`
  width: 75%;
  max-width: 75rem;
  position: relative;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  font-size: 1.8rem;
  color: #264653;
  font-weight: bold;
  @media (max-width: 550px) {
    font-weight: normal;
    font-size: 1.4rem;
  }
`;

export const AddButton = styled.button`
  font-size: 18px;
  background-color: #fff;
  color: #52b69a;
  font-weight: bold;
  text-align: center;
  padding: 6px 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  @media (max-width: 550px) {
    padding: 2px 7px;
    font-weight: normal;
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  background-color: #52b69a;
  border-radius: 5px;
  padding: 4px 12px;
  top: -4px;
  right: 0px;
  transition: 0.2s all;
  &:hover {
    color: #fff;
    background-color: #43aa8b;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    font-size: 13px;
    top: -2px;
  }
`;

export const BtnText = styled.div`
  display: inline;
  margin-right: 10px;
`;
