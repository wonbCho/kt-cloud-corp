import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@src/components/common/Loading';

import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, index) =>
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            )}
            <Route component={lazy(() => import('@src/pages/NotFound'))} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
