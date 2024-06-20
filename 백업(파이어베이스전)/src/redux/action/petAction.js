/* import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getContents(query) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_PETS_REQUEST" });

      // 필터된 쿼리를 이용하여 API 요청
      const petApi = await api.get(
        `/abandonmentPublic?&serviceKey=${API_KEY}`,
        {
          params: {
            upkind: query.UPKIND_NM,
            kind: query.KIND_NM,
            state: query.STATE_NM,
            upr_cd: query.LOCATION_NM,
            sexCd: query.GENDER_NM,
            neuter_yn: query.NEUTER_NM,
            _type: "json",
          },
          serviceKey: API_KEY,
        }
      );

      const petSidoApi = await api.get(`/sido?serviceKey=${API_KEY}`, {
        params: {
          serviceKey: API_KEY,
        },
      });

      const petKindApi = await api.get(
        `/kind?up_kind_cd=417000&serviceKey=${API_KEY}`,
        {
          params: {
            serviceKey: API_KEY,
          },
        }
      );

      dispatch({
        type: "GET_PET_SUCCESS",
        payload: {
          petList: petApi.data,
          petSidoList: petSidoApi.data,
          petKindList: petKindApi.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_PETS_FAILURE" });
    }
  };
}
export const getAllShelters = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALL_SHELTERS_REQUEST" });

      const response = await api.get(
        `/abandonmentPublic?&serviceKey=${API_KEY}`,
        {
          params: {
            _type: "json",
          },
          serviceKey: API_KEY,
        }
      );

      const allPetsList = response.data.response.body.items.item;
      //console.log("allPetsList", allPetsList);

      const uniqueAllPetsList = allPetsList.filter(
        (pet, index, self) =>
          index === self.findIndex((t) => t.careAddr === pet.careAddr)
      );
      console.log("uniqueAllPetsList", uniqueAllPetsList);

      dispatch({
        type: "GET_ALL_SHELTERS_SUCCESS",
        payload: {
          uniqueAllPetsList: uniqueAllPetsList, // 유일한 보호소 목록
          allPetsList: allPetsList, // 모든 애완동물 목록
        },
      });
    } catch (error) {
      dispatch({ type: "GET_ALL_SHELTERS_FAILURE", payload: error });
    }
  };
};

function getPetDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_PET_DETAIL_REQUEST" });

      const getPetApi = await api.get(
        `/abandonmentPublic?desertionNo=${id}&serviceKey=${API_KEY}`,
        {
          params: {
            _type: "json",
          },
          serviceKey: API_KEY,
        }
      );

      dispatch({
        type: "GET_PET_DETAIL_SUCCESS",
        payload: {
          petDetail: getPetApi.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_PET_DETAIL_FAIL", payload: error.error });
    }
  };
}

function getShelterDetail(shelterId) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SHELTER_DETAIL_REQUEST" });
      const response = await api.get(
        `/abandonmentPublic?desertionNo=${shelterId}&serviceKey=${API_KEY}`,
        {
          params: {
            _type: "json",
          },
          serviceKey: API_KEY,
        }
      );

      dispatch({
        type: "GET_SHELTER_DETAIL_SUCCESS",
        payload: {
          shelterDetail: response.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_SHELTER_DETAIL_FAILURE", payload: error });
    }
  };
}

export const petAction = {
  getContents,
  getPetDetail,
  getAllShelters,
  getShelterDetail,
}; */

import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getContents(query) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_PETS_REQUEST" });

      // 병렬로 API 요청
      const [petApi, petSidoApi, petKindApi] = await Promise.all([
        api.get(`/abandonmentPublic?serviceKey=${API_KEY}`, {
          params: {
            upkind: query.UPKIND_NM,
            kind: query.KIND_NM,
            state: query.STATE_NM,
            upr_cd: query.LOCATION_NM,
            sexCd: query.GENDER_NM,
            neuter_yn: query.NEUTER_NM,
            _type: "json",
          },
        }),
        api.get(`/sido?serviceKey=${API_KEY}`, {
          params: {
            _type: "json",
          },
        }),
        api.get(`/kind?up_kind_cd=417000&serviceKey=${API_KEY}`, {
          params: {
            _type: "json",
          },
        }),
      ]);

      dispatch({
        type: "GET_PET_SUCCESS",
        payload: {
          petList: petApi.data,
          petSidoList: petSidoApi.data,
          petKindList: petKindApi.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_PETS_FAILURE" });
    }
  };
}

export const getAllShelters = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ALL_SHELTERS_REQUEST" });

      const response = await api.get(
        `/abandonmentPublic?serviceKey=${API_KEY}`,
        {
          params: {
            _type: "json",
          },
        }
      );

      const allPetsList = response.data.response.body.items.item;

      const uniqueAllPetsList = allPetsList.filter(
        (pet, index, self) =>
          index === self.findIndex((t) => t.careAddr === pet.careAddr)
      );
      console.log("uniqueAllPetsList", uniqueAllPetsList);

      dispatch({
        type: "GET_ALL_SHELTERS_SUCCESS",
        payload: {
          uniqueAllPetsList: uniqueAllPetsList,
          allPetsList: allPetsList,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_ALL_SHELTERS_FAILURE", payload: error });
    }
  };
};

function getPetDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_PET_DETAIL_REQUEST" });

      const getPetApi = await api.get(
        `/abandonmentPublic?desertionNo=${id}&serviceKey=${API_KEY}`,
        {
          params: {
            _type: "json",
          },
        }
      );

      dispatch({
        type: "GET_PET_DETAIL_SUCCESS",
        payload: {
          petDetail: getPetApi.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_PET_DETAIL_FAIL", payload: error.error });
    }
  };
}

function getShelterDetail(shelterId) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SHELTER_DETAIL_REQUEST" });
      const response = await api.get(
        `/abandonmentPublic?desertionNo=${shelterId}&serviceKey=${API_KEY}`,
        {
          params: {
            _type: "json",
          },
        }
      );

      dispatch({
        type: "GET_SHELTER_DETAIL_SUCCESS",
        payload: {
          shelterDetail: response.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_SHELTER_DETAIL_FAILURE", payload: error });
    }
  };
}

export const petAction = {
  getContents,
  getPetDetail,
  getAllShelters,
  getShelterDetail,
};
