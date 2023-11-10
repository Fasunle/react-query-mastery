import { AxiosInstance } from "axios";

import { HTTP_STATUS } from "../utils";

/**
 * Intercept all responses and manage redirection to login page if access has expired.
 * @param axiosInstance
 */
export const responseInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.response.use((res) => {
    if (res.status === HTTP_STATUS.UNAUTHORIZED) {
      // redirect to login page
    } else if (res.status === HTTP_STATUS.FORBIDDEN) {
      // forbidden endpoint
    } else if (res.status === HTTP_STATUS.OK) {
      console.log("Interceptor Response Status OK ~ res:", res.data);
      // res.data = res.data;
    }

    return res;
  });
};
