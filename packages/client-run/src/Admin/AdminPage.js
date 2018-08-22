import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const links = [
    { path: '/admin/start', label: 'Run - Dev operations' },
    { path: '/admin/runs', label: 'Runs' },
  ];
  return (
    <Fragment>
      <div>Admin page</div>
      <ul>{links.map(link => (
        <li><Link to={link.path}>{link.label}</Link></li>
      ))}
      </ul>
    </Fragment>
  );
}

export default Admin;
