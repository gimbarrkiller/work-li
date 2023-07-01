import { ListState } from 'types';
import { createReducer } from 'utils';
import { listHandlers } from './handlers';

export const listInitialState: Readonly<ListState> = {
  listId: [],
  fullList: undefined,
  activeItem: undefined,
  isLoadingFullList: false,
};

export default createReducer(listInitialState, listHandlers);
