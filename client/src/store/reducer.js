import * as constants from "./constants";

const initialState = {
  imgs: [],
  isPending: false,
  error: ""
};

export const fetchImgs = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.FETCH_IMGS_PENDING:
      return { ...state, isPending: true };
    case constants.FETCH_IMGS_SUCCESS:
      return {
        ...state,
        isPending: false,
        imgs: action.payload
      };
    case constants.FETCH_IMGS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

const initialSearchFieldState = {
  searchField: ""
};

export const searchImgs = (state = initialSearchFieldState, action = {}) => {
  switch (action.type) {
    case constants.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateSingleImg = {
  selectedImg: {
    uri: "",
    author: "",
    name: "",
    description: "",
    tags: [],
    price: {
      small: 0,
      medium: 0,
      large: 0
    },
    exclusive: {
      isSold: false,
      price: 0
    }
  }
};

export const findSingleImg = (state = initialStateSingleImg, action = {}) => {
  switch (action.type) {
    case constants.FIND_SINGLE_IMG:
      return { ...state, selectedImg: action.payload };
    default:
      return state;
  }
};

const initialStateTagSearch = {
  tagsClicked: []
};

export const onTagClick = (state = initialStateTagSearch, action = {}) => {
  switch (action.type) {
    case constants.TAG_CLICK:
      // filter for all tags
      const fitleredStateTags = state.tagsClicked.filter(
        tag => tag !== action.payload
      );
      // add new tag
      if (fitleredStateTags.length === state.tagsClicked.length) {
        fitleredStateTags.push(action.payload);
      }
      return { ...state, tagsClicked: fitleredStateTags };
    default:
      return state;
  }
};
