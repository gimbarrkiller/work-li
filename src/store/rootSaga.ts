import { all } from 'redux-saga/effects';

import { listEffects } from './list/sagas';

export default function* rootSaga() {
  // понимаю что для одного эффектра делать all такое себе, но эьто для будущего расширения
  yield all([
    ...listEffects,
  ]);
}
