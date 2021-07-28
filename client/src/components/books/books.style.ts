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
