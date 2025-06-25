import BigNumber from 'bignumber.js';
import { UNITS_ITEMS } from '../configs/units';
import type { InputRowData, State } from './types';
import { STORAGE_EXTENDED_FORM, STORAGE_LATEST_VALUE } from './constants';

function initInputRows(): InputRowData[] {
  const latestValue = localStorage.getItem(STORAGE_LATEST_VALUE);

  return UNITS_ITEMS.map((ui) => {
    const value = latestValue
      ? BigNumber(latestValue).shiftedBy(-ui.dec).toString(10)
      : '';

    return { ...ui, value };
  });
}

export const initialState: State = {
  inputRows: initInputRows(),
  extended: localStorage.getItem(STORAGE_EXTENDED_FORM) !== 'false'
};
