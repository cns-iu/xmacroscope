import React, { Fragment } from 'react';
import OpponentSelect from './OpponentSelect';

function Page() {
  return (
    <Fragment>
      <h1>Select an opponent to race against</h1>
      <hr />
      <OpponentSelect />
    </Fragment>
  );
}

export default Page;
