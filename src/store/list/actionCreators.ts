import { ListState } from 'types';

import { ListActionType } from './actionsTypes';

export const listSetState = (payload: Partial<ListState>) => ({
  type: ListActionType.SetState,
  payload,
});

export const getFullList = () => ({
  type: ListActionType.GET_FULL_LIST,
});

export const getItemInfo = (
  payload: { idItem: string },
) => ({
  type: ListActionType.GET_ITEM_INFO,
  payload,
});
