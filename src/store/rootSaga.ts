import { all } from 'redux-saga/effects';
import { listEffects } from './list/sagas';

export default function* rootSaga() {
  yield all([
    ...listEffects,
  ]);
}
