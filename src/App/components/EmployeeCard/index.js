import React, { useState } from 'react';
import {
  Button,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Grid,
} from '@material-ui/core';
import styles from './styles';
import { addCompare, deleteCompare } from '../../actions';

export default (props) => {
  const cls = styles();
  const [toggle, setToggle] = useState(true);
  const [style, setStyle] = useState({ display: 'none' });

  //for Compare click
  const compare = () => {
    setToggle(false);
    const selectList = {
      id: props.id,
      name: props.name,
      age: props.age,
      salary: props.salary,
    };
    addCompare(selectList);
  };

  //for Remove click
  const remove = () => {
    setToggle(true);
    deleteCompare(props.id);
  };

  return (
    <Card
      onMouseEnter={() => {
        setStyle({ display: 'block' });
      }}
      onMouseLeave={() => {
        setStyle({ display: 'none' });
      }}
      className={cls.root}>
      <CardMedia className={cls.media} image={props.employeImage}>
        {toggle ? (
          <Button
            style={style}
            variant="outlined"
            size="large"
            color="secondary"
            onClick={compare}>
            Compare
          </Button>
        ) : (
          <Button
           
            variant="contained"
            size="large"
            color="primary"
            onClick={remove}>
            Remove
          </Button>
        )}
      </CardMedia>

      <CardContent>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="flex-start"
          alignItems="flex-start">
          <Grid item>
            <Typography
              variant="h6"
              color="primary"
              noWrap
              className={cls.title}>
              {props.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary" noWrap>
              Age: {props.age}
            </Typography>
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-end"
            alignItems="flex-end">
            <Typography variant="body2" noWrap>
              {`Salary: ${props.salary} $`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
