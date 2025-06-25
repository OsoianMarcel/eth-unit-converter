import { createContext } from 'react';
import type { ActionsUnion, State } from './types';

export const AppStateContext = createContext<State | undefined>(undefined);
export const AppDispatchContext = createContext<
  React.Dispatch<ActionsUnion> | undefined
>(undefined);
