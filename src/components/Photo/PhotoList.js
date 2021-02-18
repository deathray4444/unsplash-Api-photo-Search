import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import { ContentContainer } from "./../../Layout/Layout.Styled";
const Container = styled.div``;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
`;
const Col = styled.div`
  width: 33.3333%;
  padding: 12px;
`;

const PhotoList = ({ data }) => {
  return (
    <Container>
      <ContentContainer>
        <Row>
          {data.map((item, index) => (
            <Col key={index}>
              <PhotoCard {...item} />
            </Col>
          ))}
        </Row>
      </ContentContainer>
    </Container>
  );
};

export default PhotoList;
