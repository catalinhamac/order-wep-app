import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button/Button';

import { AppRoute, RouteName } from "../../config/route-config";

import styles from "./Header.module.scss";

export const testId = "headerTestId";

export const Header = () => {
    return (
        <header data-testid={testId}>
            <nav>
            <ul className={styles.list}>
                <li>
                    <NavLink activeClassName={styles.active} to={AppRoute.SupportedCurrencyPairs}><Button>{RouteName.SupportedCurrencyPairs}</Button></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to={AppRoute.Orders}><Button>{RouteName.Orders}</Button></NavLink>
                </li>
            </ul>
            </nav>
        </header>
    )
}
