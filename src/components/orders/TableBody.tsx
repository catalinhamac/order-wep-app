import React from 'react';
import { TableBody as MuiTableBody } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { Order } from '../../domain/Order';

export const testId = "tableBodyTestId";

interface Props {
  rows: Order[] | null;
  rowsPerPage: number;
  page: number;
  handleCancel: (id: string) => void;
}

interface Row extends Order {
  [index: string]: any
}

export const TableBody = ({
  rows,
  rowsPerPage,
  page,
  handleCancel,
  ...rest
}: Props): JSX.Element => (
  <MuiTableBody {...rest}>
    {rows && (rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows
    ).map((row: Row) => {
      const {
        id,
        buy,
        counterCcy,
        investmentCcy,
        limit,
        validUntil
      } = row;

      return <TableRow key={id} hover data-testid={testId}>
        <TableCell component="td" scope="row">
          {counterCcy}
        </TableCell>
        <TableCell component="td" scope="row">
          {investmentCcy}
        </TableCell>
        <TableCell component="td" scope="row">
          {buy ? "Buy" : "Sell"}
        </TableCell>
        <TableCell component="td" scope="row">
          {limit}
        </TableCell>
        <TableCell component="td" scope="row">
          {validUntil}
        </TableCell>
        <TableCell component="td" scope="row">
          <Button onClick={() => handleCancel(id)}><DeleteIcon /></Button>
        </TableCell>
      </TableRow>
    })}
  </MuiTableBody>
);
