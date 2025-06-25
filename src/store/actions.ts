import BigNumber from 'bignumber.js';
import { UNITS_ITEMS } from '../configs/units';
import type { UnitName } from '../configs/units';
import type { ActionsUnion } from './types';
import { STORAGE_EXTENDED_FORM, STORAGE_LATEST_VALUE } from './constants';

export function changeRows(name: UnitName, value: string): ActionsUnion {
  saveLatestFormValueWithDebounce(name, value);

  return {
    type: 'CHANGE_ROWS',
    payload: { name, value }
  };
}

export function changeMode(mode: boolean): ActionsUnion {
  localStorage.setItem(STORAGE_EXTENDED_FORM, mode ? 'true' : 'false');

  return {
    type: 'CHANGE_MODE',
    payload: mode
  };
}

let debounceTimeoutId: number | null = null;
function saveLatestFormValueWithDebounce(name: UnitName, value: string) {
  if (debounceTimeoutId !== null) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = null;
  }

  debounceTimeoutId = setTimeout(() => setLatestWeiValue(name, value), 300);
}

function setLatestWeiValue(name: UnitName, value: string) {
  let weiValue: string;

  const isEmptyValue = value.trim() === '';
  // Remove the value from the storage when the value is empty
  if (isEmptyValue) {
    localStorage.removeItem(STORAGE_LATEST_VALUE);
    return;
  }

  if (name === 'wei') {
    weiValue = value;
  } else {
    const actualUnitDetails = UNITS_ITEMS.find((ui) => ui.name === name);
    if (!actualUnitDetails) {
      throw new Error(`Unable to find the unit details by name: ${name}.`);
    }

    weiValue = BigNumber(value).shiftedBy(actualUnitDetails.dec).toString(10);
  }

  localStorage.setItem(STORAGE_LATEST_VALUE, weiValue);
}
