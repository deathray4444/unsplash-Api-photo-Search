import React from "react";

const initialState = {
  photos: [],
  searchResults: {
    results: [],
  },
};

export const Action = {
  Types: {
    GET_PHOTOS: "GET_PHOTOS",
    SET_PHOTOS: "SET_PHOTOS",
    SEARCH_PHOTOS: "SEARCH_PHOTOS",
    SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
  },
  Creator: {
    getPhotos: (payload) => ({
      type: Action.Types.GET_PHOTOS,
      payload,
    }),

    setPhotos: (payload) => ({
      type: Action.Types.SET_PHOTOS,
      payload,
    }),
    serachPhotos: (payload) => ({
      type: Action.Types.SEARCH_PHOTOS,
      payload,
    }),
    setSearchResults: (payload) => ({
      type: Action.Types.SET_SEARCH_RESULTS,
      payload,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.Types.SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case Action.Types.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
