import { ActionFn, ListState } from 'types';

import { ListActionType } from './actionsTypes';
import { listSetState } from './actionCreators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandlerFn<F extends (...args: any[]) => any> = ActionFn<ListState, ReturnType<F>>;

const setState: HandlerFn<typeof listSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const listHandlers = {
  [ListActionType.SetState]: setState,
};
