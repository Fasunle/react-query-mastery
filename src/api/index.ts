import axios from "axios";

import interceptors from "../interceptors";
import { config } from "../config";

const http = axios.create({
  baseURL: config.BASE_URL,
});

// register all interceptors
interceptors(http);

export default http;
