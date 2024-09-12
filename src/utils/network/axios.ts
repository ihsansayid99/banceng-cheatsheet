import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import Axios, {
  AxiosError,
  AxiosRequestConfig,
//   AxiosRequestHeaders,
} from "axios";

// import { TOKEN_NOT_FOUND, UNAUTHORIZED, USER_NOT_LOGGED_IN } from "../constant";
// import { noNeedTokenForUrl } from "../helpers";
// import storage from "../storage/storage";

// interface BinusHeaderProps extends AxiosRequestHeaders {
//   token: string;
// }

export const axios = Axios.create();

export const axiosBaseQuery =
  (
    { contentType }: { contentType: string } = {
      contentType: "application/json",
    },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType,
        },
      });
      return { data: result?.data || null };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

// axios.interceptors.request.use(async (request) => {
//   const token = storage.getToken();
//   const { url } = request;
//   // insert token when needed
//   if (token && !noNeedTokenForUrl(url as string)) {
//     request.headers = {
//       token,
//     } as BinusHeaderProps;
//   }
//   return request;
// });

// axios.interceptors.response.use(undefined, async (error) => {
//   const { response, config } = error;
//   if (!config) {
//     return Promise.reject(error);
//   }

//   if (response) {
//     const {
//       data: { message },
//     } = response;

//     // token not provided
//     if (message.en === TOKEN_NOT_FOUND) {
//       storage.setLoggedIn(false);
//       window.location.href = "/login";
//     }

//     // token expired
//     if (message.en === UNAUTHORIZED) {
//       storage.setLoggedIn(false);
//       window.location.href = "/login";
//     }

//     // not logged in
//     if (message.en === USER_NOT_LOGGED_IN) {
//       storage.setLoggedIn(false);
//       window.location.href = "/login";
//     }
//   }
//   return error;
// });
