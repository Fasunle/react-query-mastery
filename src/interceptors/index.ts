import { AxiosInstance } from "axios";
import { configurationInterceptor } from "./configInterceptor";
import { responseInterceptor } from "./responseInterceptors";

export default function (axios: AxiosInstance) {
  // register all interceptors
  configurationInterceptor(axios);
  responseInterceptor(axios);
}
