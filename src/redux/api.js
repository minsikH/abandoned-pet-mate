import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://apis.data.go.kr/1543061/abandonmentPublicSrvc",

  params: {
    numOfRows: 200,
    pageNo: 1,
    _type: "json",
    serviceKey: API_KEY,
  },
  headers: {
    Accept: "application/json",
  },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    //console.log("request start:", config);
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    //console.log("request error:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  function (response) {
    // 응답 데이터가 있는 작업 수행
    //console.log("get response:", response);
    return response;
  },
  function (error) {
    // 응답 오류가 있는 작업 수행
    //console.log("get error:", error);
    return Promise.reject(error);
  }
);

export default api;
