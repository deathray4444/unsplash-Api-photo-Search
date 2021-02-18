import React from "react";
import styled from "styled-components";
const Container = styled.div`
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;

const PhotoCard = ({ urls }) => {
  return (
    <Container>
      <img src={urls.regular} alt="" />
    </Container>
  );
};

export default PhotoCard;
