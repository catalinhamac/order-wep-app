import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { AppRoute } from '../../config/route-config';
import { resetCreateOrder } from '../../store/create-order/create-order-slice';

export const testId = 'createOrderTestId';
export const title = 'Create order';

export const CreateOrderBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetCreateOrder());
  };

  return (
    <div data-testid={testId}>
      <h3>{title}</h3>
      <Link to={AppRoute.Create} onClick={handleClick}>
        <Button variant="contained">
          <AddCircleOutlineIcon />
        </Button>
      </Link>
    </div>
  );
};
