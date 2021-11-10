import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function ProyectoGridView({ columns, data, selectedRow }) {
  const handleSelecteRow = (ID) => () => {
    selectedRow?.(ID);
  };
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((item, index) => (
              <TableCell
                key={"table-th-" + index}
                style={{ fontWeight: 700 }}
                {...item}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={"table-tr " + rowIndex}
              style={{ cursor: "default" }}
              onDoubleClick={handleSelecteRow(row[0])}
            >
              {row.map((cell, cellIndex) => {
                let columnObj: any = {};
                if (cellIndex) {
                  columnObj = columns[cellIndex - 1];
                }
                // eslint-disable-next-line
                const { children, ...colProps } = columnObj;
                return (
                  !!cellIndex && (
                    <TableCell key={"table-cell" + cellIndex} {...colProps}>
                      {cell}
                    </TableCell>
                  )
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
