import React from "react";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
//import './App.css';
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: linear-gradient(
    89.7deg,
    rgb(0, 32, 95) 2.8%,
    rgb(132, 53, 142) 97.8%
  );
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Hero />}>
            <Route path="/who" element={<Who />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
