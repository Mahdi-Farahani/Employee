import { API } from './const';
import Types from './Types';
import { store } from './store';

export const setProduct = (payload) =>
  store.dispatch({
    type: Types.SET_EMPLOYEELIST,
    payload,
  });

export const addCompare = (payload) =>
  store.dispatch({
    type: Types.ADD_COMPARE,
    payload,
  });
export const deleteCompare = (payload) =>
  store.dispatch({
    type: Types.DELETE_COMPARE,
    payload,
  });

//Load Data from API
export const loadData = () =>
  API('')
    .then((res) => {
      setProduct(res.data.data);
      return res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
