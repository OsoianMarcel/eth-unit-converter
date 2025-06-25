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
  description: string;
};

export const UNITS_ITEMS: UnitItem[] = [
  {
    name: 'wei',
    dec: 0,
    main: true,
    warnNonInt: true,
    description: 'The smallest denomination of Ether. 1 ETH = 1e18 wei.'
  },
  {
    name: 'kwei',
    dec: 3,
    main: false,
    warnNonInt: false,
    description: 'Also known as "babbage". 1 kwei = 1,000 wei.'
  },
  {
    name: 'mwei',
    dec: 6,
    main: false,
    warnNonInt: false,
    description: 'Also called "lovelace". 1 mwei = 1,000,000 wei.'
  },
  {
    name: 'gwei',
    dec: 9,
    main: true,
    warnNonInt: false,
    description:
      'Short for gigawei. Commonly used for gas prices. 1 gwei = 1,000,000,000 wei.'
  },
  {
    name: 'szabo',
    dec: 12,
    main: false,
    warnNonInt: false,
    description: 'Named after Nick Szabo. 1 szabo = 1e12 wei.'
  },
  {
    name: 'finney',
    dec: 15,
    main: false,
    warnNonInt: false,
    description: 'Named after Hal Finney. 1 finney = 1e15 wei.'
  },
  {
    name: 'eth',
    dec: 18,
    main: true,
    warnNonInt: false,
    description: 'Ether, the main unit of Ethereum. 1 ETH = 1e18 wei.'
  },
  {
    name: 'kether',
    dec: 21,
    main: false,
    warnNonInt: false,
    description: 'Also known as "grand ether". 1 kether = 1,000 ETH.'
  },
  {
    name: 'mether',
    dec: 24,
    main: false,
    warnNonInt: false,
    description: 'Mega ether. 1 mether = 1,000,000 ETH.'
  },
  {
    name: 'gether',
    dec: 27,
    main: false,
    warnNonInt: false,
    description: 'Giga ether. 1 gether = 1,000,000,000 ETH.'
  },
  {
    name: 'tether',
    dec: 30,
    main: false,
    warnNonInt: false,
    description: 'Tera ether. 1 tether = 1,000,000,000,000 ETH.'
  }
];
