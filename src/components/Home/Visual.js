import React from "react";
import styled from "styled-components";
import { Overlay } from "../../Layout/Layout.Styled";
import Header from "../Header";
import SeachBox from "./../Searchbox/index";

const Container = styled.div`
  position: relative;
  height: 500px;
  background: url("https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80")
    50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  h1 {
    font-size: 46px;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: capitalize;
    color: #fff;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    font-weight: 500;
    color: #fff;
  }
`;

const Visual = () => {
  return (
    <Container>
      <Overlay alpha={0.3} />
      <Content>
        <h1>Unsplach</h1>
        <p>
          The internet’s source of freely-usable images. <br />
          Powered by creators everywhere.
        </p>
        <SeachBox />
      </Content>
    </Container>
  );
};

export default Visual;
