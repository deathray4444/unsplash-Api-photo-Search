import React, { useEffect } from "react";
import styled from "styled-components";
import { Action } from "./../redux/reducer";
import { CLIENT_ID } from "./../constants/Consts";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "../components/Photo/PhotoList";

const Container = styled.div``;

const SearchListContiner = ({ match }) => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state);

  const query = match.params.query;

  useEffect(() => {
    searchPhotos();
  }, [query]);

  const searchPhotos = () => {
    dispatch(
      Action.Creator.serachPhotos({
        client_id: CLIENT_ID,
        query,
        per_page: 30,
      })
    );
  };

  return (
    <Container>
      <PhotoList data={searchResults.results} />
    </Container>
  );
};

export default SearchListContiner;
