import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'reactstrap';

function Admin() {
  const links = [
    { path: '/admin/start', label: 'Run - Dev operations' },
    { path: '/admin/runs', label: 'Runs' },
  ];
  return (
    <Row>
      <Col xs={12} className="mx-auto">
        <Card body>
          <div>Admin page</div>
          <ul>{links.map(link => (
            <li><Link to={link.path}>{link.label}</Link></li>
          ))}
          </ul>
        </Card>
      </Col>
    </Row>
  );
}

export default Admin;
