import { SagaIterator } from 'redux-saga';
import { call } from 'redux-saga/effects';

const baseURL = process.env.REACT_APP_API_URL as string;

export function* callApi(options: {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
}): SagaIterator {
  const { endpoint } = options;

  const url = `${baseURL}${endpoint}`;

  const response: Response = yield call(fetch, url);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let json: Record<string, any>;
  try {
    json = yield call([response, response.json]);
  } catch (error) {
    json = {
    };
  }

  return json;
}
