import axios from "axios";

export const baseURL = "http://ec2-13-209-103-2.ap-northeast-2.compute.amazonaws.com:8080";
const request = async ({ url, method, body, params }) => {
  try {
    const config = {
      baseURL,
      params,
      headers: {
        withCredentials: true,
      },
    };

    const token = localStorage.getItem("accessToken");

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const data =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "patch" && (await axios.patch(url, body, config))) ||
      (method === "put" && (await axios.put(url, body, config))) ||
      (method === "delete" &&
        (await axios.delete(url, {
          baseURL,
          params,
          headers: { Authorization: token },
          data: body,
        }))) ||
      {};
    return data;
  } catch (error) {
    throw error;
  }
};

export const GET = (url) => request({ url, method: "get" });
export const POST = (url, body) => request({ url, method: "post", body });
export const PATCH = (url, body) => request({ url, method: "patch", body });
export const PUT = (url, body) => request({ url, method: "put", body });
export const DELETE = (url, body) => request({ url, method: "delete", body });
