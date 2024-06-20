import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getContents(query) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIES_REQUEST" });

            // 필터된 쿼리를 이용하여 API 요청을 보냅니다.
            const petApi = await api.get(`/abandonmentPublic?bgnde=20211201&endde=20211231&serviceKey=${API_KEY}`, {
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
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            //console.log("petApi response:", petApi.data); // 응답 확인

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

            /*             const petShelterApi = await api.get(`/shelter?upr_cd="&org_cd="&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                },
            });
 */
            /* const petShelterApi1 = await api.get(`/sigungu?upr_cd=6110000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi2 = await api.get(`/sigungu?upr_cd=6260000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi3 = await api.get(`/sigungu?upr_cd=6270000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi4 = await api.get(`/sigungu?upr_cd=6280000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi5 = await api.get(`/sigungu?upr_cd=6290000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi6 = await api.get(`/sigungu?upr_cd=5690000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi7 = await api.get(`/sigungu?upr_cd=6300000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi8 = await api.get(`/sigungu?upr_cd=6310000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi9 = await api.get(`/sigungu?upr_cd=6410000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi10 = await api.get(`/sigungu?upr_cd=6530000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi11 = await api.get(`/sigungu?upr_cd=6430000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi12 = await api.get(`/sigungu?upr_cd=6440000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi13 = await api.get(`/sigungu?upr_cd=6540000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi14 = await api.get(`/sigungu?upr_cd=6460000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi15 = await api.get(`/sigungu?upr_cd=6470000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi16 = await api.get(`/sigungu?upr_cd=6480000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi17 = await api.get(`/sigungu?upr_cd=6500000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const allPetShelterApis = [
                petShelterApi1.data,
                petShelterApi2.data,
                petShelterApi3.data,
                petShelterApi4.data,
                petShelterApi5.data,
                petShelterApi6.data,
                petShelterApi7.data,
                petShelterApi8.data,
                petShelterApi9.data,
                petShelterApi10.data,
                petShelterApi11.data,
                petShelterApi12.data,
                petShelterApi13.data,
                petShelterApi14.data,
                petShelterApi15.data,
                petShelterApi16.data,
                petShelterApi17.data,
            ];

            console.log("All petShelterApis:", allPetShelterApis); */

            const petShelterApi1 = await api.get(`/shelter?upr_cd=6110000&org_cd=6119999&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi2 = await api.get(`/shelter?upr_cd=6110000&org_cd=3220000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi3 = await api.get(`/shelter?upr_cd=6110000&org_cd=3240000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi4 = await api.get(`/shelter?upr_cd=6110000&org_cd=3080000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi5 = await api.get(`/shelter?upr_cd=6110000&org_cd=3150000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi6 = await api.get(`/shelter?upr_cd=6110000&org_cd=3200000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi7 = await api.get(`/shelter?upr_cd=6110000&org_cd=3040000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi8 = await api.get(`/shelter?upr_cd=6110000&org_cd=3160000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi9 = await api.get(`/shelter?upr_cd=6110000&org_cd=3170000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi10 = await api.get(`/shelter?upr_cd=6110000&org_cd=3100000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi11 = await api.get(`/shelter?upr_cd=6110000&org_cd=3090000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi12 = await api.get(`/shelter?upr_cd=6110000&org_cd=3050000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi13 = await api.get(`/shelter?upr_cd=6110000&org_cd=3190000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi14 = await api.get(`/shelter?upr_cd=6110000&org_cd=3130000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi15 = await api.get(`/shelter?upr_cd=6110000&org_cd=3120000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi16 = await api.get(`/shelter?upr_cd=6110000&org_cd=6119998&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi17 = await api.get(`/shelter?upr_cd=6110000&org_cd=3210000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi18 = await api.get(`/shelter?upr_cd=6110000&org_cd=3030000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi19 = await api.get(`/shelter?upr_cd=6110000&org_cd=3070000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi20 = await api.get(`/shelter?upr_cd=6110000&org_cd=3230000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi21 = await api.get(`/shelter?upr_cd=6110000&org_cd=3140000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi22 = await api.get(`/shelter?upr_cd=6110000&org_cd=3180000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi23 = await api.get(`/shelter?upr_cd=6110000&org_cd=3020000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi24 = await api.get(`/shelter?upr_cd=6110000&org_cd=3110000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi25 = await api.get(`/shelter?upr_cd=6110000&org_cd=3000000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi26 = await api.get(`/shelter?upr_cd=6110000&org_cd=3010000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi27 = await api.get(`/shelter?upr_cd=6110000&org_cd=3060000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi28 = await api.get(`/shelter?upr_cd=6260000&org_cd=3360000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi29 = await api.get(`/shelter?upr_cd=6260000&org_cd=3350000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi30 = await api.get(`/shelter?upr_cd=6260000&org_cd=3400000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi31 = await api.get(`/shelter?upr_cd=6260000&org_cd=3310000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi32 = await api.get(`/shelter?upr_cd=6260000&org_cd=3270000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi33 = await api.get(`/shelter?upr_cd=6260000&org_cd=3300000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi34 = await api.get(`/shelter?upr_cd=6260000&org_cd=3290000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi35 = await api.get(`/shelter?upr_cd=6260000&org_cd=3320000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi36 = await api.get(`/shelter?upr_cd=6260000&org_cd=3390000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi37 = await api.get(`/shelter?upr_cd=6260000&org_cd=3340000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi38 = await api.get(`/shelter?upr_cd=6260000&org_cd=3260000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi39 = await api.get(`/shelter?upr_cd=6260000&org_cd=3380000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi40 = await api.get(`/shelter?upr_cd=6260000&org_cd=3370000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi41 = await api.get(`/shelter?upr_cd=6260000&org_cd=3280000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi42 = await api.get(`/shelter?upr_cd=6260000&org_cd=3250000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi43 = await api.get(`/shelter?upr_cd=6260000&org_cd=3330000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi44 = await api.get(`/shelter?upr_cd=6270000&org_cd=5141000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi45 = await api.get(`/shelter?upr_cd=6270000&org_cd=3440000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi46 = await api.get(`/shelter?upr_cd=6270000&org_cd=3470000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi47 = await api.get(`/shelter?upr_cd=6270000&org_cd=3480000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi48 = await api.get(`/shelter?upr_cd=6270000&org_cd=3420000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi49 = await api.get(`/shelter?upr_cd=6270000&org_cd=3450000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi50 = await api.get(`/shelter?upr_cd=6270000&org_cd=3430000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi51 = await api.get(`/shelter?upr_cd=6270000&org_cd=3460000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi52 = await api.get(`/shelter?upr_cd=6270000&org_cd=3410000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi53 = await api.get(`/shelter?upr_cd=6280000&org_cd=3570000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi54 = await api.get(`/shelter?upr_cd=6280000&org_cd=3550000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi55 = await api.get(`/shelter?upr_cd=6280000&org_cd=3530000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi56 = await api.get(`/shelter?upr_cd=6280000&org_cd=3500000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi57 = await api.get(`/shelter?upr_cd=6280000&org_cd=3510500&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi58 = await api.get(`/shelter?upr_cd=6280000&org_cd=3540000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi59 = await api.get(`/shelter?upr_cd=6280000&org_cd=3560000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi60 = await api.get(`/shelter?upr_cd=6280000&org_cd=3520000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi61 = await api.get(`/shelter?upr_cd=6280000&org_cd=3580000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi62 = await api.get(`/shelter?upr_cd=6280000&org_cd=3490000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi63 = await api.get(`/shelter?upr_cd=6290000&org_cd=3630000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi64 = await api.get(`/shelter?upr_cd=6290000&org_cd=6299998&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi65 = await api.get(`/shelter?upr_cd=6290000&org_cd=3610000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi66 = await api.get(`/shelter?upr_cd=6290000&org_cd=3590000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi67 = await api.get(`/shelter?upr_cd=6290000&org_cd=3620000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi68 = await api.get(`/shelter?upr_cd=6290000&org_cd=3600000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi69 = await api.get(`/shelter?upr_cd=6300000&org_cd=3680000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi70 = await api.get(`/shelter?upr_cd=6300000&org_cd=3640000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi71 = await api.get(`/shelter?upr_cd=6300000&org_cd=3660000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi72 = await api.get(`/shelter?upr_cd=6300000&org_cd=3670000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi73 = await api.get(`/shelter?upr_cd=6300000&org_cd=3650000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi74 = await api.get(`/shelter?upr_cd=6310000&org_cd=3700000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi75 = await api.get(`/shelter?upr_cd=6310000&org_cd=3710000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi76 = await api.get(`/shelter?upr_cd=6310000&org_cd=3720000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi77 = await api.get(`/shelter?upr_cd=6310000&org_cd=3730000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi78 = await api.get(`/shelter?upr_cd=6310000&org_cd=3690000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi79 = await api.get(`/shelter?upr_cd=6410000&org_cd=4160000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi80 = await api.get(`/shelter?upr_cd=6410000&org_cd=3940000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi81 = await api.get(`/shelter?upr_cd=6410000&org_cd=3970000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi82 = await api.get(`/shelter?upr_cd=6410000&org_cd=3900000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi83 = await api.get(`/shelter?upr_cd=6410000&org_cd=5540000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi84 = await api.get(`/shelter?upr_cd=6410000&org_cd=3980000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi85 = await api.get(`/shelter?upr_cd=6410000&org_cd=4020000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi86 = await api.get(`/shelter?upr_cd=6410000&org_cd=5630000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi87 = await api.get(`/shelter?upr_cd=6410000&org_cd=4090000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi88 = await api.get(`/shelter?upr_cd=6410000&org_cd=3990000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi89 = await api.get(`/shelter?upr_cd=6410000&org_cd=3920000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi90 = await api.get(`/shelter?upr_cd=6410000&org_cd=3860000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi91 = await api.get(`/shelter?upr_cd=6410000&org_cd=3780000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi92 = await api.get(`/shelter?upr_cd=6410000&org_cd=3740000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi93 = await api.get(`/shelter?upr_cd=6410000&org_cd=4010000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi94 = await api.get(`/shelter?upr_cd=6410000&org_cd=3930000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi95 = await api.get(`/shelter?upr_cd=6410000&org_cd=4080000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi96 = await api.get(`/shelter?upr_cd=6410000&org_cd=3830000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi97 = await api.get(`/shelter?upr_cd=6410000&org_cd=5590000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi98 = await api.get(`/shelter?upr_cd=6410000&org_cd=4170000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi99 = await api.get(`/shelter?upr_cd=6410000&org_cd=5700000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi100 = await api.get(`/shelter?upr_cd=6410000&org_cd=4140000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi101 = await api.get(`/shelter?upr_cd=6410000&org_cd=4000000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi102 = await api.get(`/shelter?upr_cd=6410000&org_cd=4050000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi103 = await api.get(`/shelter?upr_cd=6410000&org_cd=4030000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi104 = await api.get(`/shelter?upr_cd=6410000&org_cd=3820000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi105 = await api.get(`/shelter?upr_cd=6410000&org_cd=4070000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi106 = await api.get(`/shelter?upr_cd=6410000&org_cd=4060000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi107 = await api.get(`/shelter?upr_cd=6410000&org_cd=3910000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi108 = await api.get(`/shelter?upr_cd=6410000&org_cd=5600000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi109 = await api.get(`/shelter?upr_cd=6410000&org_cd=4040000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi110 = await api.get(`/shelter?upr_cd=6410000&org_cd=5530000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi111 = await api.get(`/shelter?upr_cd=6530000&org_cd=4201000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi112 = await api.get(`/shelter?upr_cd=6530000&org_cd=4341000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi113 = await api.get(`/shelter?upr_cd=6530000&org_cd=4211000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi114 = await api.get(`/shelter?upr_cd=6530000&org_cd=4241000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi115 = await api.get(`/shelter?upr_cd=6530000&org_cd=4231000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi116 = await api.get(`/shelter?upr_cd=6530000&org_cd=4321000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi117 = await api.get(`/shelter?upr_cd=6530000&org_cd=4351000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi118 = await api.get(`/shelter?upr_cd=6530000&org_cd=4271000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi119 = await api.get(`/shelter?upr_cd=6530000&org_cd=4191000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi120 = await api.get(`/shelter?upr_cd=6530000&org_cd=4331000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi121 = await api.get(`/shelter?upr_cd=6530000&org_cd=4291000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi122 = await api.get(`/shelter?upr_cd=6530000&org_cd=4301000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi123 = await api.get(`/shelter?upr_cd=6530000&org_cd=4181000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi124 = await api.get(`/shelter?upr_cd=6530000&org_cd=4221000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi125 = await api.get(`/shelter?upr_cd=6530000&org_cd=4281000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi126 = await api.get(`/shelter?upr_cd=6530000&org_cd=4251000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi127 = await api.get(`/shelter?upr_cd=6530000&org_cd=4311000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi128 = await api.get(`/shelter?upr_cd=6530000&org_cd=4261000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi129 = await api.get(`/shelter?upr_cd=6430000&org_cd=4460000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi130 = await api.get(`/shelter?upr_cd=6430000&org_cd=4480000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi131 = await api.get(`/shelter?upr_cd=6430000&org_cd=4420000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi132 = await api.get(`/shelter?upr_cd=6430000&org_cd=4440000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi133 = await api.get(`/shelter?upr_cd=6430000&org_cd=4430000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi134 = await api.get(`/shelter?upr_cd=6430000&org_cd=4470000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi135 = await api.get(`/shelter?upr_cd=6430000&org_cd=4400000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi136 = await api.get(`/shelter?upr_cd=6430000&org_cd=5570000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi137 = await api.get(`/shelter?upr_cd=6430000&org_cd=4450000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi138 = await api.get(`/shelter?upr_cd=6430000&org_cd=5710000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi139 = await api.get(`/shelter?upr_cd=6430000&org_cd=4390000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi140 = await api.get(`/shelter?upr_cd=6440000&org_cd=5580000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi141 = await api.get(`/shelter?upr_cd=6440000&org_cd=4500000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi142 = await api.get(`/shelter?upr_cd=6440000&org_cd=4550000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi143 = await api.get(`/shelter?upr_cd=6440000&org_cd=4540000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi144 = await api.get(`/shelter?upr_cd=6440000&org_cd=5680000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi145 = await api.get(`/shelter?upr_cd=6440000&org_cd=4510000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi146 = await api.get(`/shelter?upr_cd=6440000&org_cd=4570000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi147 = await api.get(`/shelter?upr_cd=6440000&org_cd=4530000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi148 = await api.get(`/shelter?upr_cd=6440000&org_cd=4580000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi149 = await api.get(`/shelter?upr_cd=6440000&org_cd=4520000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi150 = await api.get(`/shelter?upr_cd=6440000&org_cd=4560000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi151 = await api.get(`/shelter?upr_cd=6440000&org_cd=4610000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi152 = await api.get(`/shelter?upr_cd=6440000&org_cd=4490000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi153 = await api.get(`/shelter?upr_cd=6440000&org_cd=4590000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi154 = await api.get(`/shelter?upr_cd=6440000&org_cd=4620000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi155 = await api.get(`/shelter?upr_cd=6440000&org_cd=4600000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi156 = await api.get(`/shelter?upr_cd=6540000&org_cd=4781000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi157 = await api.get(`/shelter?upr_cd=6540000&org_cd=4671000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi158 = await api.get(`/shelter?upr_cd=6540000&org_cd=4711000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi159 = await api.get(`/shelter?upr_cd=6540000&org_cd=4701000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi160 = await api.get(`/shelter?upr_cd=6540000&org_cd=4741000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi161 = await api.get(`/shelter?upr_cd=6540000&org_cd=4791000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi162 = await api.get(`/shelter?upr_cd=6540000&org_cd=4771000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi163 = await api.get(`/shelter?upr_cd=6540000&org_cd=4721000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi164 = await api.get(`/shelter?upr_cd=6540000&org_cd=4681000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi165 = await api.get(`/shelter?upr_cd=6540000&org_cd=4761000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi166 = await api.get(`/shelter?upr_cd=6540000&org_cd=4751000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi167 = await api.get(`/shelter?upr_cd=6540000&org_cd=4641000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi168 = await api.get(`/shelter?upr_cd=6540000&org_cd=4691000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi169 = await api.get(`/shelter?upr_cd=6540000&org_cd=4731000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi170 = await api.get(`/shelter?upr_cd=6460000&org_cd=4920000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi171 = await api.get(`/shelter?upr_cd=6460000&org_cd=4880000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi172 = await api.get(`/shelter?upr_cd=6460000&org_cd=4860000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi173 = await api.get(`/shelter?upr_cd=6460000&org_cd=4840000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi174 = await api.get(`/shelter?upr_cd=6460000&org_cd=4870000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi175 = await api.get(`/shelter?upr_cd=6460000&org_cd=4830000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi176 = await api.get(`/shelter?upr_cd=6460000&org_cd=4850000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi177 = await api.get(`/shelter?upr_cd=6460000&org_cd=4800000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi178 = await api.get(`/shelter?upr_cd=6460000&org_cd=4950000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi179 = await api.get(`/shelter?upr_cd=6460000&org_cd=4890000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi180 = await api.get(`/shelter?upr_cd=6460000&org_cd=4820000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi181 = await api.get(`/shelter?upr_cd=6460000&org_cd=5010000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi182 = await api.get(`/shelter?upr_cd=6460000&org_cd=4810000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi183 = await api.get(`/shelter?upr_cd=6460000&org_cd=4970000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi184 = await api.get(`/shelter?upr_cd=6460000&org_cd=4940000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi185 = await api.get(`/shelter?upr_cd=6460000&org_cd=4990000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi186 = await api.get(`/shelter?upr_cd=6460000&org_cd=4980000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi187 = await api.get(`/shelter?upr_cd=6460000&org_cd=4910000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi188 = await api.get(`/shelter?upr_cd=6460000&org_cd=5000000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi189 = await api.get(`/shelter?upr_cd=6460000&org_cd=4960000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi190 = await api.get(`/shelter?upr_cd=6460000&org_cd=4930000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi191 = await api.get(`/shelter?upr_cd=6460000&org_cd=4900000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi192 = await api.get(`/shelter?upr_cd=6470000&org_cd=5130000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi193 = await api.get(`/shelter?upr_cd=6470000&org_cd=6479998&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi194 = await api.get(`/shelter?upr_cd=6470000&org_cd=5050000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi195 = await api.get(`/shelter?upr_cd=6470000&org_cd=5200000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi196 = await api.get(`/shelter?upr_cd=6470000&org_cd=5080000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi197 = await api.get(`/shelter?upr_cd=6470000&org_cd=5060000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi198 = await api.get(`/shelter?upr_cd=6470000&org_cd=5120000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi199 = await api.get(`/shelter?upr_cd=6470000&org_cd=5240000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi200 = await api.get(`/shelter?upr_cd=6470000&org_cd=5110000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi201 = await api.get(`/shelter?upr_cd=6470000&org_cd=5210000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi202 = await api.get(`/shelter?upr_cd=6470000&org_cd=5070000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi203 = await api.get(`/shelter?upr_cd=6470000&org_cd=5180000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi204 = await api.get(`/shelter?upr_cd=6470000&org_cd=5170000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi205 = await api.get(`/shelter?upr_cd=6470000&org_cd=5090000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi206 = await api.get(`/shelter?upr_cd=6470000&org_cd=5100000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi207 = await api.get(`/shelter?upr_cd=6470000&org_cd=5230000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi208 = await api.get(`/shelter?upr_cd=6470000&org_cd=5260000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi209 = await api.get(`/shelter?upr_cd=6470000&org_cd=5250000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi210 = await api.get(`/shelter?upr_cd=6470000&org_cd=5150000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi211 = await api.get(`/shelter?upr_cd=6470000&org_cd=5190000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi212 = await api.get(`/shelter?upr_cd=6470000&org_cd=5160000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi213 = await api.get(`/shelter?upr_cd=6470000&org_cd=5220000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi214 = await api.get(`/shelter?upr_cd=6470000&org_cd=5020000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi215 = await api.get(`/shelter?upr_cd=6480000&org_cd=5370000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi216 = await api.get(`/shelter?upr_cd=6480000&org_cd=5470000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi217 = await api.get(`/shelter?upr_cd=6480000&org_cd=5420000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi218 = await api.get(`/shelter?upr_cd=6480000&org_cd=5350000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi219 = await api.get(`/shelter?upr_cd=6480000&org_cd=5430000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi220 = await api.get(`/shelter?upr_cd=6480000&org_cd=5360000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi221 = await api.get(`/shelter?upr_cd=6480000&org_cd=5340000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi222 = await api.get(`/shelter?upr_cd=6480000&org_cd=5450000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi223 = await api.get(`/shelter?upr_cd=6480000&org_cd=5380000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi224 = await api.get(`/shelter?upr_cd=6480000&org_cd=5390000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi225 = await api.get(`/shelter?upr_cd=6480000&org_cd=5310000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi226 = await api.get(`/shelter?upr_cd=6480000&org_cd=5410000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi227 = await api.get(`/shelter?upr_cd=6480000&org_cd=5320000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi228 = await api.get(`/shelter?upr_cd=6480000&org_cd=5280000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi229 = await api.get(`/shelter?upr_cd=6480000&org_cd=5670000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi230 = await api.get(`/shelter?upr_cd=6480000&org_cd=5330000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi231 = await api.get(`/shelter?upr_cd=6480000&org_cd=5440000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi232 = await api.get(`/shelter?upr_cd=6480000&org_cd=5400000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi233 = await api.get(`/shelter?upr_cd=6480000&org_cd=5460000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi234 = await api.get(`/shelter?upr_cd=6480000&org_cd=5480000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi235 = await api.get(`/shelter?upr_cd=6500000&org_cd=6520000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi236 = await api.get(`/shelter?upr_cd=6500000&org_cd=6510000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const petShelterApi237 = await api.get(`/shelter?upr_cd=6500000&org_cd=6500000&serviceKey=${API_KEY}`, {
                params: {
                    serviceKey: API_KEY,
                    _type: "json",
                },
            });
            const allPetShelterApis = [
                petShelterApi1.data,
                petShelterApi2.data,
                petShelterApi3.data,
                petShelterApi4.data,
                petShelterApi5.data,
                petShelterApi6.data,
                petShelterApi7.data,
                petShelterApi8.data,
                petShelterApi9.data,
                petShelterApi10.data,
                petShelterApi11.data,
                petShelterApi12.data,
                petShelterApi13.data,
                petShelterApi14.data,
                petShelterApi15.data,
                petShelterApi16.data,
                petShelterApi17.data,
                petShelterApi18.data,
                petShelterApi19.data,
                petShelterApi20.data,
                petShelterApi21.data,
                petShelterApi22.data,
                petShelterApi23.data,
                petShelterApi24.data,
                petShelterApi25.data,
                petShelterApi26.data,
                petShelterApi27.data,
                petShelterApi28.data,
                petShelterApi29.data,
                petShelterApi30.data,
                petShelterApi31.data,
                petShelterApi32.data,
                petShelterApi33.data,
                petShelterApi34.data,
                petShelterApi35.data,
                petShelterApi36.data,
                petShelterApi37.data,
                petShelterApi38.data,
                petShelterApi39.data,
                petShelterApi40.data,
                petShelterApi41.data,
                petShelterApi42.data,
                petShelterApi43.data,
                petShelterApi44.data,
                petShelterApi45.data,
                petShelterApi46.data,
                petShelterApi47.data,
                petShelterApi48.data,
                petShelterApi49.data,
                petShelterApi50.data,
                petShelterApi51.data,
                petShelterApi52.data,
                petShelterApi53.data,
                petShelterApi54.data,
                petShelterApi55.data,
                petShelterApi56.data,
                petShelterApi57.data,
                petShelterApi58.data,
                petShelterApi59.data,
                petShelterApi60.data,
                petShelterApi61.data,
                petShelterApi62.data,
                petShelterApi63.data,
                petShelterApi64.data,
                petShelterApi65.data,
                petShelterApi66.data,
                petShelterApi67.data,
                petShelterApi68.data,
                petShelterApi69.data,
                petShelterApi70.data,
                petShelterApi71.data,
                petShelterApi72.data,
                petShelterApi73.data,
                petShelterApi74.data,
                petShelterApi75.data,
                petShelterApi76.data,
                petShelterApi77.data,
                petShelterApi78.data,
                petShelterApi79.data,
                petShelterApi80.data,
                petShelterApi81.data,
                petShelterApi82.data,
                petShelterApi83.data,
                petShelterApi84.data,
                petShelterApi85.data,
                petShelterApi86.data,
                petShelterApi87.data,
                petShelterApi88.data,
                petShelterApi89.data,
                petShelterApi90.data,
                petShelterApi91.data,
                petShelterApi92.data,
                petShelterApi93.data,
                petShelterApi94.data,
                petShelterApi95.data,
                petShelterApi96.data,
                petShelterApi97.data,
                petShelterApi98.data,
                petShelterApi99.data,
                petShelterApi100.data,
                petShelterApi101.data,
                petShelterApi102.data,
                petShelterApi103.data,
                petShelterApi104.data,
                petShelterApi105.data,
                petShelterApi106.data,
                petShelterApi107.data,
                petShelterApi108.data,
                petShelterApi109.data,
                petShelterApi110.data,
                petShelterApi111.data,
                petShelterApi112.data,
                petShelterApi113.data,
                petShelterApi114.data,
                petShelterApi115.data,
                petShelterApi116.data,
                petShelterApi117.data,
                petShelterApi118.data,
                petShelterApi119.data,
                petShelterApi120.data,
                petShelterApi121.data,
                petShelterApi122.data,
                petShelterApi123.data,
                petShelterApi124.data,
                petShelterApi125.data,
                petShelterApi126.data,
                petShelterApi127.data,
                petShelterApi128.data,
                petShelterApi129.data,
                petShelterApi130.data,
                petShelterApi131.data,
                petShelterApi132.data,
                petShelterApi133.data,
                petShelterApi134.data,
                petShelterApi135.data,
                petShelterApi136.data,
                petShelterApi137.data,
                petShelterApi138.data,
                petShelterApi139.data,
                petShelterApi140.data,
                petShelterApi141.data,
                petShelterApi142.data,
                petShelterApi143.data,
                petShelterApi144.data,
                petShelterApi145.data,
                petShelterApi146.data,
                petShelterApi147.data,
                petShelterApi148.data,
                petShelterApi149.data,
                petShelterApi150.data,
                petShelterApi151.data,
                petShelterApi152.data,
                petShelterApi153.data,
                petShelterApi154.data,
                petShelterApi155.data,
                petShelterApi156.data,
                petShelterApi157.data,
                petShelterApi158.data,
                petShelterApi159.data,
                petShelterApi160.data,
                petShelterApi161.data,
                petShelterApi162.data,
                petShelterApi163.data,
                petShelterApi164.data,
                petShelterApi165.data,
                petShelterApi166.data,
                petShelterApi167.data,
                petShelterApi168.data,
                petShelterApi169.data,
                petShelterApi170.data,
                petShelterApi171.data,
                petShelterApi172.data,
                petShelterApi173.data,
                petShelterApi174.data,
                petShelterApi175.data,
                petShelterApi176.data,
                petShelterApi177.data,
                petShelterApi178.data,
                petShelterApi179.data,
                petShelterApi180.data,
                petShelterApi181.data,
                petShelterApi182.data,
                petShelterApi183.data,
                petShelterApi184.data,
                petShelterApi185.data,
                petShelterApi186.data,
                petShelterApi187.data,
                petShelterApi188.data,
                petShelterApi189.data,
                petShelterApi190.data,
                petShelterApi191.data,
                petShelterApi192.data,
                petShelterApi193.data,
                petShelterApi194.data,
                petShelterApi195.data,
                petShelterApi196.data,
                petShelterApi197.data,
                petShelterApi198.data,
                petShelterApi199.data,
                petShelterApi200.data,
                petShelterApi201.data,
                petShelterApi202.data,
                petShelterApi203.data,
                petShelterApi204.data,
                petShelterApi205.data,
                petShelterApi206.data,
                petShelterApi207.data,
                petShelterApi208.data,
                petShelterApi209.data,
                petShelterApi210.data,
                petShelterApi211.data,
                petShelterApi212.data,
                petShelterApi213.data,
                petShelterApi214.data,
                petShelterApi215.data,
                petShelterApi216.data,
                petShelterApi217.data,
                petShelterApi218.data,
                petShelterApi219.data,
                petShelterApi220.data,
                petShelterApi221.data,
                petShelterApi222.data,
                petShelterApi223.data,
                petShelterApi224.data,
                petShelterApi225.data,
                petShelterApi226.data,
                petShelterApi227.data,
                petShelterApi228.data,
                petShelterApi229.data,
                petShelterApi230.data,
                petShelterApi231.data,
                petShelterApi232.data,
                petShelterApi233.data,
                petShelterApi234.data,
                petShelterApi235.data,
                petShelterApi236.data,
                petShelterApi237.data,
            ];
            /* console.log("All petShelterApis:", allPetShelterApis); */
            //console.log("petKindApi response:", petKindApi.data); // 응답 확인

            //console.log("petShelterApi response:", petShelterApi.data); // 응답 확인

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    petList: petApi.data,
                    petSidoList: petSidoApi.data,
                    petKindList: petKindApi.data,
                    /* petShelterList: petShelterApi.data, */
                },
            });
        } catch (error) {
            // 에러 핸들링하는 곳
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}

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
            const getPetApi = await api.get(`/pet/${id}`, {
                params: {
                    _type: "json",
                    serviceKey: API_KEY,
                },
            });

            console.log("action 페이지 movieDetail:", getPetApi.data); // 데이터 확인

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
export const petAction = {
    getContents,
    getPetDetail,
};
