import styled from "styled-components/macro";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-width: 38rem;
  width: fit-content;
  height: 18rem;
  background-color: #fff;
  z-index: 1000;

  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
`;

export const Cover = styled.div`
  width: 40%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  text-align: center;
  background-color: #fff;
`;

export const Title = styled.h3`
  color: #222;
  font-size: 1.3rem;
  display: inline-block;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #555;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 5px 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.1s all;
  &:hover {
    -webkit-box-shadow: 0px 0px 1px 1px rgba(46, 49, 49, 0.9);
    -moz-box-shadow: 0px 0px 1px 1px rgba(46, 49, 49, 0.9);
    box-shadow: 0px 0px 1px 1px rgba(46, 49, 49, 0.9);
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 7px;
  margin-top: 3rem;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  font-style: oblique;
  margin-left: 9px;
  margin-bottom: 5px;
  color: gray;
  border-bottom: solid gray 1.5px;
  padding-bottom: 5px;

  align-self: flex-end;
`;

export const Photo = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  background-size: cover;
  background-position: center;
  object-fit: center;
  background-color: gray;
`;

export const BookList = styled.ul`
  display: flex;
  flex-flow: row-reverse;
`;

export const BookItem = styled.li`
  list-style: none;
  width: 2.8rem;
  height: 3.6rem;
  margin-right: 9px;
  background-size: cover;
  background-position: center;
  object-fit: center;
`;

export const ListTitle = styled.p`
  margin: 3px;
  padding: 2px 6px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  display: inline;
  float: left;
  color: #333;
`;
