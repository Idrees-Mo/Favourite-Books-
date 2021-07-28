import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #8ecae6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  max-width: 80rem;
  position: relative;
`;

export const Header = styled.div`
  font-size: 1.6rem;
  color: #333;
  font-weight: bold;
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
`;

export const BtnContainer = styled.div`
  position: absolute;
  background-color: #52b69a;
  border-radius: 3px;
  padding: 4px 12px;
  top: -8px;
  right: 0px;
  transition: 0.2s all;
  &:hover {
    color: #fff;
    background-color: #43aa8b;
    cursor: pointer;
  }
`;

export const BtnText = styled.div`
  display: inline;
  margin-right: 10px;
`;
