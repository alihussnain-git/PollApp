import * as EntryPointAPI from './entryPoint';
import * as QuestionAPI from './questions';
import { ApiResponse, ApisauceInstance, create, HEADERS } from 'apisauce';
import { defaultDomain } from './environment';
let api: ApisauceInstance;
export interface RequestProps {
  payload?: any;
}

export const createAPIFromEnvironment = () => {
  if (!api) {
    api = create({
      baseURL: defaultDomain,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    });
  }
};
createAPIFromEnvironment();

type ApiRequest<T = any> = (
  url: string,
  payload?: Object,
  headers?: HEADERS,
) => Promise<ApiResponse<T>>;

export namespace API {
  export const request = <T = any>(
    apiRequest: ApiRequest<T>,
    url: string,
    headers?: HEADERS,
    requestProps?: RequestProps,
  ): Promise<ApiResponse<T, T>> => {
    return apiRequest(url, requestProps?.payload?.body || requestProps?.payload, headers).then(
      (res: ApiResponse<T>) => {
        handleError<T>(res);

        return res;
      },
    );
  };

  export const get = <T>(url: string, requestProps?: RequestProps) => {
    const headers = requestProps?.payload?.headers
      ? { headers: { ...requestProps.payload.headers } }
      : { headers: {} };
    if (requestProps?.payload?.headers) {
      delete requestProps.payload?.headers;
    }
    return request<T>(api.get, url, headers, requestProps);
  };

  export const post = <T>(url: string, requestProps?: RequestProps) => {
    const headers = requestProps?.payload?.headers
      ? { headers: { ...requestProps.payload.headers } }
      : { headers: {} };
    if (requestProps?.payload?.headers) {
      delete requestProps.payload?.headers;
    }
    return request<T>(api.post, url, headers, requestProps);
  };

  const handleError = <T = any>(res: ApiResponse<T>) => {
    if (!res.ok) {
      if (res.status === 405) {
        return res;
      } else if (res.status === 400) {
        return undefined;
      } else if (res.status === 422) {
        throw new Error('CARD_DECLINED');
      } else {
        const data: any = res.data;
        if (data && data.errorMessage) {
          throw new Error(data.errorMessage);
        }
        throw new Error(res.problem);
      }
    }

    return res;
  };
}

export { EntryPointAPI, QuestionAPI };
