import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./styled/React.styeld";
import Routes from "./Routes";

import Header from "./components/Header";
const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes />
    </Container>
  );
};

export default App;
