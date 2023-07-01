/* eslint-disable no-console */
import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import {
  callApi,
  Endpoint,
} from 'api';

import { ListActionType } from './actionsTypes';
import { ItemType } from './types';
import {
  GetItemInfo,
  listSetState,
} from './actionCreators';
import { listSelectors } from './selectors';

export function* getFullListSaga() {
  try {
    yield put(listSetState({ isLoadingFullList: true }));
    const fullList: ItemType[] = yield call(callApi, {
      endpoint: Endpoint.GetFullList,
    });

    yield put(listSetState({
      fullList,
      isLoadingFullList: false,
    }));

    const listId = fullList.map((item) => item.id);
    yield put(listSetState({ listId }));
  } catch (exception) {
    console.log(exception);
  } finally {
    yield put(listSetState({ isLoadingFullList: false }));
  }
}

export function* getItemDataSaga({
  payload: {
    idItem,
  },
}: ReturnType<typeof GetItemInfo>) {
  try {
    yield put(listSetState({ activeItem: undefined }));
    const fullList: ItemType[] = yield select(listSelectors.getProp('fullList'));
    const activeItem: ItemType = yield fullList.find(({ id }) => id === idItem);

    yield put(listSetState({
      activeItem,
    }));
  } catch (exception) {
    console.log(exception);
  }
}

export const listEffects = [
  takeLatest(ListActionType.GET_FULL_LIST, getFullListSaga),
  takeLatest(ListActionType.GET_ITEM_INFO, getItemDataSaga),
];
