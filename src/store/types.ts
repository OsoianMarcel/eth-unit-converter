import { type UnitItem } from '../configs/units';

export type InputRowData = UnitItem & { value: string };

export type State = {
  extended: boolean;
  inputRows: InputRowData[];
};

export type ChangeRowsAction = {
  type: 'CHANGE_ROWS';
  payload: { name: string; value: string };
};

export type ChangeModeAction = { type: 'CHANGE_MODE'; payload: boolean };

export type ActionsUnion = ChangeRowsAction | ChangeModeAction;
