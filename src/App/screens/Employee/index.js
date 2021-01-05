import React, { useEffect, useState } from 'react';
import { Divider, Grid, Container } from '@material-ui/core';
import { EmployeeCard, EmployeeList } from '../../components';
import { loadData } from '../../actions';
import employeImage from '../../assets/employe.png';
import styles from './styles';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //FOR API request
    loadData()
      .then((res) => {
        //set data to this state
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const cls = styles();
  return (
    <div>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={3}>
          {data.map((i, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <EmployeeCard
                id={i.id}
                employeImage={employeImage}
                name={i.employee_name}
                age={i.employee_age}
                salary={i.employee_salary}
              />
            </Grid>
          ))}
        </Grid>
        <Divider className={cls.divider} />
        <EmployeeList />
      </Container>
    </div>
  );
};
