export type UnitName =
  | 'wei'
  | 'kwei'
  | 'mwei'
  | 'gwei'
  | 'szabo'
  | 'finney'
  | 'eth'
  | 'kether'
  | 'mether'
  | 'gether'
  | 'tether';

export type UnitItem = {
  name: UnitName;
  dec: number;
  main: boolean;
  warnNonInt: boolean;
};

export const UNITS_ITEMS: UnitItem[] = [
  {
    name: 'wei',
    dec: 0,
    main: true,
    warnNonInt: true
  },
  {
    name: 'kwei',
    dec: 3,
    main: false,
    warnNonInt: false
  },
  {
    name: 'mwei',
    dec: 6,
    main: false,
    warnNonInt: false
  },
  {
    name: 'gwei',
    dec: 9,
    main: true,
    warnNonInt: false
  },
  {
    name: 'szabo',
    dec: 12,
    main: false,
    warnNonInt: false
  },
  {
    name: 'finney',
    dec: 15,
    main: false,
    warnNonInt: false
  },
  {
    name: 'eth',
    dec: 18,
    main: true,
    warnNonInt: false
  },
  {
    name: 'kether',
    dec: 21,
    main: false,
    warnNonInt: false
  },
  {
    name: 'mether',
    dec: 24,
    main: false,
    warnNonInt: false
  },
  {
    name: 'gether',
    dec: 27,
    main: false,
    warnNonInt: false
  },
  {
    name: 'tether',
    dec: 30,
    main: false,
    warnNonInt: false
  }
];
