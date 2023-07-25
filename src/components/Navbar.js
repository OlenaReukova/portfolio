import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #f45050;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/who">About Me</Link>
            </ListItem>
            <ListItem>
              <Link to="/works">Projects</Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contact</Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"></Icon>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
