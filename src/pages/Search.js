import React from "react";
import styled from "styled-components";
import SearchListContiner from "../containers/SearchListContiner";
const Container = styled.div``;

const Search = (props) => {
  return (
    <Container>
      <SearchListContiner {...props} />
    </Container>
  );
};

export default Search;
