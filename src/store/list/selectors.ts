import { ReduxState, ListState } from 'types';

export const listSelectors = {
  getProp: <T extends keyof ListState>(propKey: T) => (
    state: ReduxState,
  ) => state.list[propKey],
  getState: (state: ReduxState) => state.list,
};
