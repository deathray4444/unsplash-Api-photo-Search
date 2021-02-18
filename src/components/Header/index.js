import React from "react";
import styled from "styled-components";
import SeachBox from "../Searchbox";

import { navigate } from "./../../lib/History";

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div``;

const Header = () => {
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>Logo</Logo>
      <SeachBox />
    </Container>
  );
};

export default Header;
