import React from 'react';
import './index.css';
import Table from '../Tables/BaseTable';
import {
  RunColumns, RunFormat, RunQuery, RunVariables,
} from '../Tables/Runs';

function Home() {
  return (
    <Table
      columns={RunColumns}
      formatFunction={RunFormat}
      query={RunQuery}
      queryVariables={RunVariables}
    />
  );
}

export default Home;
