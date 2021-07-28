import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  width: 100%;
  input,
  button,
  select {
    height: 2rem;
    padding: 6px;
    margin-bottom: 8px;
  }
  label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 2px;
  }
  button {
    display: flex;
    align-items: center;
    align-self: flex-end;
    font-weight: 600;
    border: none;
    color: #fff;
    padding: 4px 12px;
    background-color: green;
    cursor: pointer;
    margin-left: 6px;
  }
  .BtnGroup {
    display: flex;
    align-self: flex-end;
  }
  .cancel {
    background-color: #333;
  }
`;

export const Title = styled.h3`
  color: #222;
  font-size: 1.3rem;
  display: inline-block;
  margin-top: auto;
`;
