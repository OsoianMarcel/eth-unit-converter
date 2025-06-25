import { useReducer, type ReactNode } from 'react';
import { AppDispatchContext, AppStateContext } from './context';
import { appReducer } from './reducer';
import { initialState } from './init-state';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext value={state}>
      <AppDispatchContext value={dispatch}>{children}</AppDispatchContext>
    </AppStateContext>
  );
};
