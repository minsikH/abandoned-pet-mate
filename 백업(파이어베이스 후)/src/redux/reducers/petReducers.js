let initialState = {
  petList: [],
  loading: false,
  uniqueAllPetsList: [],
  allPetsList: [],
};

function petReducers(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_PETS_REQUEST":
    case "GET_ALL_SHELTERS_REQUEST":
      return { ...state, loading: true };
    case "GET_PET_SUCCESS":
      return {
        ...state,
        petList: payload.petList,
        loading: false,
      };
    case "GET_PET_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "GET_ALL_SHELTERS_SUCCESS":
      return {
        ...state,
        uniqueAllPetsList: payload.uniqueAllPetsList,
        allPetsList: payload.allPetsList,
        loading: false,
      };
    case "GET_PETS_FAILURE":
    case "GET_ALL_SHELTERS_FAILURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default petReducers;
