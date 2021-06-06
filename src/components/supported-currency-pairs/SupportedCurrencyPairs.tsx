import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { selectSupportedCurrencyPairs } from '../../store/supported-currency-pairs/supported-currency-pairs-slice';
import{ getSupportedCurrencyPairsThunk } from "../../store/supported-currency-pairs/supported-currency-pairs-thunks";
import { Pairs } from './Pairs';
import { BoxCenter } from '../BoxCenter';

export const SupportedCurrencyPairs = () => {

    const dispatch = useDispatch();
    const pairs = useSelector(selectSupportedCurrencyPairs, shallowEqual);

    useEffect(() => {
        dispatch(getSupportedCurrencyPairsThunk());
      }, [dispatch]);

    return (
        <div>
            {pairs ? 
               <Pairs items={pairs} />
            :
                <BoxCenter>
                    <CircularProgress disableShrink />
                    <h4>Loading currency pairs</h4>
                </BoxCenter>
            }   
        </div>
    )
}
