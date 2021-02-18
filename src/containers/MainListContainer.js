import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Action } from "./../redux/reducer";
import { CLIENT_ID } from "./../constants/Consts";
import PhotoList from "./../components/Photo/PhotoList";

const Container = styled.div``;

const MainListContainer = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    dispatch(
      Action.Creator.getPhotos({
        per_page: 30,
        client_id: CLIENT_ID,
      })
    );
  };
  return (
    <Container>
      <PhotoList data={photos} />
    </Container>
  );
};

export default MainListContainer;
