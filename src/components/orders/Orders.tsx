import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import { selectOrders } from '../../store/retrieve-orders/retrieve-orders-slice';
import{ getOrdersThunk } from "../../store/retrieve-orders/retrieve-orders-thunks";
import { getCancelOrderThunk } from "../../store/cancel-order/cancel-order-thunks";
import { resetErrorsCancelOrder, selectErrors } from "../../store/cancel-order/cancel-order-slice";
import { Items } from "./Items"
import { BoxCenter } from '../BoxCenter';
import { CreateOrderBtn } from "../create-order/CreateOrderBtn";
import { Confirm, Dialog } from "../dialog/Dialog";

export const testId = 'ordersTestId';

export const Orders = (): JSX.Element => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders, shallowEqual);
  const error = useSelector(selectErrors, shallowEqual);
  const [openModal, setOpenModal] = useState(false);
  const [cancelId, setCancelId] = useState('');

  useEffect(() => {
    dispatch(getOrdersThunk());
    dispatch(resetErrorsCancelOrder())
  }, [dispatch]);

  const handleCancel = (id: string) => {
    setOpenModal(true);
    setCancelId(id)
  }

  const handleClose = (confirmation: string) => {
    setOpenModal(false);
    if(Confirm.Delete !== confirmation) return;
    dispatch(getCancelOrderThunk(cancelId));    
}

if(error) {
 return <Alert severity="error">{error.message}</Alert>
}

    return (
        <div data-testid={testId}>
            { orders ? 
            <>
              <CreateOrderBtn />
              <h1>Orders</h1>
              <Items items={orders} handleCancel={handleCancel} />
              <Dialog open={openModal} handleClose={handleClose} />
            </> :
            <BoxCenter>
                <CircularProgress disableShrink />
                <h4>Loading orders</h4>
            </BoxCenter> }
        </div>
    )
}
