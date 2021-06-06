import React, { useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { Order } from '../../domain/Order';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';

export const testId = 'itemsTestId';

interface Props {
  items: Order[] | null;
  handleCancel: (id: string) => void;
}

export const Items = (props: Props): JSX.Element => {
  const { items: rows, handleCancel } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (rows && rows.length < rowsPerPage && page > 0) {
      setPage(0);
    }
  }, [rows, rowsPerPage, page]);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} data-testid={testId}>
      <Table aria-label="items table">
        <TableHead />
        <TableBody
          handleCancel={handleCancel}
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={page}
        />
        <TableFooter
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
};
