import Types from './Types';

const initialState = {
  compareList: [],
  employeeList: [],
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_EMPLOYEELIST:
      return { ...state, employeeList: [payload] };

    case Types.ADD_COMPARE:
      return {
        ...state,
        compareList: [...state.compareList, payload],
      };
    case Types.DELETE_COMPARE:
      return {
        ...state,
        compareList: state.compareList.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
