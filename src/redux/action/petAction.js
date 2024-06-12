import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getContents(query) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIES_REQUEST" });

            // 필터된 쿼리를 이용하여 API 요청을 보냅니다.
/*             const petApi = await api.get(`/abandonmentPublic?bgnde=20211201&endde=20211231&serviceKey=${API_KEY}`, { */
            const petApi = await api.get(`/abandonmentPublic?&serviceKey=${API_KEY}`, {
                params: {
                    /*                     noticeSdt: "20240101",
                    noticeEdt: "20240514", */
                    /*                     upkind: query.SPECIES_NM, */
                    upkind: query.UPKIND_NM,
                    kind: query.KIND_NM,
                    state: query.STATE_NM,
                    upr_cd: query.LOCATION_NM,
                    sexCd: query.GENDER_NM,
                    neuter_yn: query.NEUTER_NM,
                    _type: "json",
                },
                serviceKey: API_KEY,
            });
            //console.log("petApi response:", petApi.data); // 응답 확인

            // petApi의 응답 데이터에서 care_reg_no를 포함한 정보를 추출합니다.
            /*             const petList = petApi.data.response.body.items.item;
            petList.forEach((pet) => {
                console.log(`Care Reg No: ${pet.careRegNo}, Care Name: ${pet.careNm}`);
            }); */

            /* aaaaaaaaaaaaaaaaaaaaaaa */
            /*             const uprOrgGroups = {
                6110000: [
                    3220000, 3240000, 3080000, 3150000, 3200000, 3040000, 3160000, 3170000, 3100000, 3090000, 3050000,
                    3190000, 3130000, 3120000, 6119998, 3210000, 3030000, 3070000, 3230000, 3140000, 3180000, 3020000,
                    3110000, 3000000, 3010000, 3060000,
                ],
                6260000: [
                    3360000, 3350000, 3400000, 3310000, 3270000, 3300000, 3290000, 3320000, 3390000, 3340000, 3260000,
                    3380000, 3370000, 3280000, 3250000, 3330000,
                ],
                6270000: [5141000, 3440000, 3470000, 3480000, 3420000, 3450000, 3430000, 3460000, 3410000],
                6280000: [3570000, 3550000, 3530000, 3500000, 3510500, 3540000, 3560000, 3520000, 3580000, 3490000],
                6290000: [3630000, 6299998, 3610000, 3590000, 3620000, 3600000],
                6300000: [3680000, 3640000, 3660000, 3670000, 3650000],
                6310000: [3700000, 3710000, 3720000, 3730000, 3690000],
                6410000: [
                    4160000, 3940000, 3970000, 3900000, 5540000, 3980000, 4020000, 5630000, 4090000, 3990000, 3920000,
                    3860000, 3780000, 3740000, 4010000, 3930000, 4080000, 3830000, 5590000, 4170000, 5700000, 4140000,
                    4000000, 4050000, 4030000, 3820000, 4070000, 4060000, 3910000, 5600000, 4040000, 5530000,
                ],
                6480000: [
                    5370000, 5470000, 5420000, 5350000, 5430000, 5360000, 5340000, 5450000, 5380000, 5390000, 5310000,
                    5410000, 5320000, 5280000, 5670000, 5330000, 5440000, 5400000, 5460000, 5480000,
                ],
                6500000: [6520000, 6510000, 6500000],

                // 다른 'upr_cd'에 대한 그룹화도 추가할 수 있음
            };

            // API 호출을 그룹화하여 실행
            const petShelterApis = [];

            (async () => {
                for (const upr_cd in uprOrgGroups) {
                    const org_cds = uprOrgGroups[upr_cd];
                    const apiPromises = org_cds.map(async (org_cd) => {
                        try {
                            const petShelterApi = await api.get(
                                `/shelter?upr_cd=${upr_cd}&org_cd=${org_cd}&serviceKey=${API_KEY}`,
                                {
                                    params: {
                                        serviceKey: API_KEY,
                                        _type: "json",
                                    },
                                },
                            );
                            return petShelterApi.data.response.body.items.item; // 응답 데이터만 반환
                        } catch (error) {
                            console.error(`Error fetching data for upr_cd ${upr_cd} and org_cd ${org_cd}:`, error);
                            return null; // 에러 발생 시 null 반환
                        }
                    });
                    const groupResult = await Promise.all(apiPromises);
                    // 각 org_cd의 결과를 한 배열로 합침
                    const flattenedResult = groupResult.flat().filter((item) => item !== null);
                    petShelterApis.push(...flattenedResult);
                }

                console.log(petShelterApis);
            })(); */

            /* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */

            const petSidoApi = await api.get(`/sido?serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                },
            });

            const petKindApi = await api.get(`/kind?up_kind_cd=417000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                },
            });

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    petList: petApi.data,
                    petSidoList: petSidoApi.data,
                    petKindList: petKindApi.data,
                    /* petShelterList: petShelterApis, */
                    /* petShelterList: petShelterApi.data, */
                },
            });
        } catch (error) {
            // 에러 핸들링하는 곳
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}
export const getAllShelters = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_ALL_SHELTERS_REQUEST" });

            const response = await api.get(`/abandonmentPublic?&serviceKey=${API_KEY}`, {
                params: {
/*                     upkind: "",
                    state: "", */
                    _type: "json",
                },
                serviceKey: API_KEY,
            });

            const allPetsList = response.data.response.body.items.item;

            console.log("allPetsList", allPetsList);

            const uniqueAllPetsList = allPetsList.filter(
                (pet, index, self) => index === self.findIndex((t) => t.careAddr === pet.careAddr),
            );
            console.log("uniqueAllPetsList", uniqueAllPetsList);

            dispatch({
                type: "GET_ALL_SHELTERS_SUCCESS",
/*                 payload: uniqueAllPetsList, */
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

/* function getPetDetail(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });

            const getPetApi = api.get(`/pet/${id}`);

            let [petDetail] = await Promise.all([getPetApi]);

            console.log("action 페이지 movieDetail:", petDetail);

            dispatch({
                type: "GET_MOVIE_DETAIL_SUCCESS",
                payload: {
                    petDetail: petDetail.data,
                },
            });
        } catch (error) {
            dispatch({ type: "GET_MOVIE_DETAIL_FAIL", payload: error.error });
        }
    };
} */
function getPetDetail(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });

            // '/pet/${id}' 대신에 올바른 API 엔드포인트를 사용합니다.
/*             const getPetApi = await api.get(`/pet/${id}`, { */
            const getPetApi = await api.get(`/abandonmentPublic?desertionNo=${id}&serviceKey=${API_KEY}`, {
                params: {
                    _type: "json",
                },
                serviceKey: API_KEY,
            });

            //console.log("action 페이지 movieDetail:", getPetApi.data); // 데이터 확인

            dispatch({
                type: "GET_MOVIE_DETAIL_SUCCESS",
                payload: {
                    petDetail: getPetApi.data,
                },
            });
        } catch (error) {
            dispatch({ type: "GET_MOVIE_DETAIL_FAIL", payload: error.error });
        }
    };
}

function getShelterDetail(shelterId) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_SHELTER_DETAIL_REQUEST" });
            const response = await api.get(`/abandonmentPublic?desertionNo=${shelterId}&serviceKey=${API_KEY}`, {
                params: {
                    _type: "json",
                },
                serviceKey: API_KEY,
            });

            console.log("action 페이지 shelterDetail:", response.data); // 데이터 확인

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
