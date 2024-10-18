import React from 'react';
import EfoTable from './components/EfoTable.tsx';
import './styles/App.css'

const App: React.FC = () => {
  return (
    <>
      <h1>EFO Terms Viewer</h1>
      <EfoTable />
    </>
  );
};

export default App;
