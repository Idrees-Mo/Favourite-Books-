import React from "react";

import {
  AddButton,
  BtnContainer,
  BtnText,
  Container,
  Header,
  Wrapper,
} from "./navbar.style";

interface IProps {
  showAddForm: Function;
}

const Navbar: React.FC<IProps> = ({ showAddForm }) => {
  return (
    <Container>
      <Wrapper>
        <Header>My Favourite Books</Header>
        <BtnContainer onClick={() => showAddForm(true)}>
          <BtnText> New Book</BtnText>
          <AddButton> + </AddButton>
        </BtnContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
