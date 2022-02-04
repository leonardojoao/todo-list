// import { HYDRATE } from 'next-redux-wrapper';
import { TODO_LIST } from '../../actions';
import { State } from '../../../types/redux/todo';

interface Action {
  type: string,
};

let initialState: State = {
  todos: ['Raman Sharma', 'Test Name'],
  text: 'sçdlkflsçdfk',
  selected: false,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload.todo };
    case TODO_LIST:
      return { ...state, all: initialState };
    default:
      return state;
  }
};

export default reducer;
