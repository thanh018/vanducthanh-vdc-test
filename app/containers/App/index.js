/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WeatherPage from 'containers/WeatherPage/index';

import { SIGNIN_URI } from 'constants/routes';

import styles from './style.module.scss';

export default function App() {
  return (
    <div className={styles.layout}>
      <Switch>
        <Route exact path="/" component={WeatherPage} />
        <Route exact path={SIGNIN_URI} component={WeatherPage} />
      </Switch>
    </div>
  );
}
