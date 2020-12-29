import React from 'react';
import { ContextDevTool } from 'react-context-devtool';
import { Action } from './actions';
import { State, intitialState } from './intitialState';

export const Context = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: intitialState,
  dispatch: () => null,
});

interface StateProviderProps {
  reducers: React.Reducer<State, Action>;
  intitialState: State;
  children?: any;
}
export const StateProvider = ({
  reducers,
  intitialState,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = React.useReducer(reducers, intitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ContextDevTool context={Context} id='Context' displayName='Context' />
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const state = React.useContext(Context).state;
  return state;
};

export const useDispatch = () => {
  const dispatch = React.useContext(Context).dispatch;
  return dispatch;
};
