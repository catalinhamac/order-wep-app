import axios from "axios";

import { appConfig } from "../config/app-config";
const { API_URL, retryCount } = appConfig;

export async function client(
  endpoint: string,
  { requestType, body, ...customConfig }: any = {},
  apiUrl = API_URL
) {
  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };

  const requestConfig = {
    method: requestType,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    withCredentials: false,
    ...customConfig,
  };

  if (body) {
    requestConfig.data = JSON.stringify(body);
  }

  const url = `${apiUrl}/${endpoint}`;

  const response = await executeWithRetry(url, requestConfig);

  return response?.data;
}

async function executeWithRetry(url: string, requestConfig: any) {
  let response;

  for (let retry = 0; retry < retryCount; retry++) {
    try {
      response = await axios(url, requestConfig);

      break;
    } catch (error) {
      const status = (error.response || {}).status;

      if (status === 504 && retry < retryCount - 1) continue;

      throw error;
    }
  }

  return response;
}
