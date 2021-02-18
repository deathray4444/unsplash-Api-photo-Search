import React from "react";
import styled from "styled-components";
import MainListContainer from "./../containers/MainListContainer";
import Visual from "./../components/Home/Visual";
const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Visual />
      <MainListContainer />
    </Container>
  );
};

export default Home;
