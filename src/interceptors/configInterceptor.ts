import { AxiosInstance } from "axios";
import { config } from "../config";

export const configurationInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.request.use((req) => {
    req.headers.set("x-api-key", config.API_KEY);
    console.log("Config Interceptor Headers:\t", req.headers);
    return req;
  });
};
