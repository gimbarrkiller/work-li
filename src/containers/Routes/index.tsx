import React, { FC } from 'react';
import {
  BrowserRouter,
  Routes as RoutesDom,
  Route,
} from 'react-router-dom';
import { PathName } from 'appConstants';
import {
  HomePage,
} from 'pages';

// можно было без роутинга, но куда без него
const Routes: FC = () => (
  <BrowserRouter>
    <RoutesDom>
      <Route
        path={PathName.home}
        element={<HomePage />}
      />
    </RoutesDom>
  </BrowserRouter>
);

export { Routes };
