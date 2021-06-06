import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from '../../config/route-config';
import { SupportedCurrencyPairs } from '../supported-currency-pairs/SupportedCurrencyPairs';
import { Orders } from '../orders/Orders';
import { CreateOrder } from '../create-order/CreateOrder';
import { NoMatch } from './NoMatch';


export const Routes = () => {
    return (
        <Switch>
      <Redirect exact from={AppRoute.Home} to={AppRoute.SupportedCurrencyPairs} />
      <Route exact path={AppRoute.SupportedCurrencyPairs}>
        <SupportedCurrencyPairs />
      </Route>
      <Route exact path={AppRoute.Orders}>
        <Orders />
      </Route>
      <Route exact path={AppRoute.Create}>
        <CreateOrder />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
    )
}
