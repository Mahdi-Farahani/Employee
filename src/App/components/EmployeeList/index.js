import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import styles from './styles';

export default () => {
  //get Compare list
  const compareList = useSelector((state) => state.compareList);

  const cls = styles();
  return (
    <div className={cls.container}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              {compareList.map((i) => (
                <TableCell key={i.id} align="left">
                  {i.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">Age</TableCell>
              {compareList.map((i) => (
                <TableCell key={i.id} align="left">
                  {i.age}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell align="left">Salary</TableCell>
              {compareList.map((i) => (
                <TableCell key={i.id} align="left">
                  {`${i.salary} $`}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
