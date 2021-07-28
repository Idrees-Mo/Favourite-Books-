import styled from "styled-components/macro";

export const Wraper = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ::after {
    content: "";
    flex: auto;
  }
`;
