import React from 'react';
import InputRow from './components/UI/InputRow/InputRow';
import Checkbox from './components/UI/Checkbox/Checkbox';
import { CONTACT_EMAIL } from './configs/main';
import type { UnitName } from './configs/units';
import { useAppDispatch, useAppState } from './store/hooks';
import { changeMode, changeRows } from './store/actions';

import './app.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppState();

  const extended = state.extended;
  const inputRows = extended
    ? state.inputRows
    : state.inputRows.filter((ir) => ir.main);

  const onInputRowChange = (name: UnitName, value: string) => {
    dispatch(changeRows(name, value));
  };

  const onChangeMode = (mode: boolean) => {
    dispatch(changeMode(mode));
  };

  return (
    <div className="main-container">
      <header className="header">
        <div className="left">
          <div className="title">
            <h2 className="title__xs">Ethereum</h2>
            <h1 className="title__md">Unit Converter</h1>
          </div>
        </div>
        <div className="right">
          <Checkbox
            checked={extended}
            label="Extended"
            onChange={onChangeMode}
          />
        </div>
      </header>

      <main className="input-rows">
        {inputRows.map((ir, i: number) => (
          <InputRow
            key={i}
            label={ir.name}
            main={ir.main}
            warnNonInt={ir.warnNonInt}
            value={ir.value}
            onChange={(v) => onInputRowChange(ir.name, v)}
          />
        ))}
      </main>

      <footer className="footer">
        <div className="footer__left">
          Made with ♥<br />
          by{' '}
          <a
            href="https://github.com/osoianmarcel"
            rel="noreferrer noopener"
            target="_blank"
          >
            Osoian Marcel
          </a>
        </div>
        <div className="footer__right">
          For feature requests
          <br />
          or bugs{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Feature%2FBug%20related%20to%20Eth%20Unit%20Converter`}
          >
            contact me
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
