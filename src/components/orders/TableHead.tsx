import React from 'react';
import { TableHead as MuiTableHead, TableHeadProps } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const headings = [
  'Counter Currency',
  'Investement Currency',
  'Status',
  'Limit',
  'Availability',
  ''
];

export const TableHead = (props: TableHeadProps): JSX.Element => {
  return (
    <MuiTableHead {...props}>
      <TableRow>
        {headings.map((h: string, index: number) => (
          <TableCell key={index}>{h}</TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};
