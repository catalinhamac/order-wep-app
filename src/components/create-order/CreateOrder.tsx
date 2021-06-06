import React, { useState, ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import clsx from 'clsx';

import { selectFormValues } from "../../store/form-values/form-values-slice";
import { getFormValuesThunk } from "../../store/form-values/form-values-thunks";
import { getCreatedOrderThunk } from "../../store/create-order/create-order-thunks";
import { selectErrors } from "../../store/create-order/create-order-slice";
import { CreateOrderBtn } from "../create-order/CreateOrderBtn";

import styles from "./CreateOrder.module.scss";

export const testId = 'createOrderTestId';

interface Currencies {
    currencies: string[]
}

const currencies = ['USD', 'SEK','NOK', 'JPY','ZAR','CHF', 'EUR'];

const CurrencyOptions = ({currencies}: Currencies): JSX.Element => <>{currencies.map((c: string, index: number) => <option key={index} value={c}>{c}</option>)}</>

export const CreateOrder = () => {
    
    const dispatch = useDispatch() as any;
    const formValues: any = useSelector(selectFormValues, shallowEqual);
    const error = useSelector(selectErrors, shallowEqual);
    const [buyValue, setBuyValue] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBuyValue(event.target.checked );
      };

    const handleSubmit = useCallback((event: any) => {
        event.preventDefault();

        const elements = [...event.target.elements];
        let values = {};
        
        elements.forEach((e: any) => {
            if(!e.name) return;
            const buyValueToSend = buyValue ? true : false;
            values = {
                ...values,
                [e.name]: e.value,
                    buy: buyValueToSend
                };
        });

        dispatch(getFormValuesThunk(values)).then((v: any) => {
            if(error) return;
            dispatch(getCreatedOrderThunk(v))
        });
 
    },[ buyValue, dispatch, error]);    

    if(error) {
        return <>
            <Box mb="1rem">
                <CreateOrderBtn />
            </Box>
            <Alert severity="error">{error.message}</Alert>
        </>
    }
    
    return (
        <Box pb="3rem" data-testid={testId}>
            <h1>Create Order</h1>
            <form onSubmit={handleSubmit}>
                <Paper className={clsx(styles.paper, styles.top)}>
                    <div>
                        <label htmlFor="counterCcy">Counter Curency</label>
                        <select 
                            name="counterCcy" 
                            id="counterCcy"
                            defaultValue={formValues && formValues.counterCcy}    
                        >
                                <CurrencyOptions currencies={currencies} />
                        </select>
                    </div>
                    <div>
                        <label htmlFor="investmentCcy">Investment Curency</label>{" "}
                            <select name="investmentCcy" id="investmentCcy" 
                            defaultValue={formValues && formValues.investmentCcy
                        }>
                            <CurrencyOptions currencies={currencies} />
                        </select>
                    </div>
                </Paper>
                <Paper className={styles.paper}>
                <div className={styles.formControl}>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary" name="buy"  onChange={handleChange}
                            defaultChecked={formValues && formValues.buy} />
                        }
                        label="Buy"
                        labelPlacement="end"
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="limit">Limit</label>
                    <input type="number" name="limit" defaultValue={formValues && formValues.limit} />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="validUntil">Validity</label>
                    <input type="date" name="validUntil" defaultValue={formValues && formValues.validUntil}  />
                </div>
                </Paper>
                <Button type="submit" variant="contained">Submit order</Button>
            </form>
        </Box>
    )
}


