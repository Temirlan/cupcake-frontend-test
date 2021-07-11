import React from 'react';
import useCurrencyPairs from './hooks/useCurrencyPairs';
import { Table } from './components';

const cols = ['Pair name/market', 'First', 'Second', 'Third'];

function App() {
  const { currencyPairs } = useCurrencyPairs();

  return (
    <div>
      <Table cols={cols} rows={currencyPairs} />
    </div>
  );
}

export default App;
