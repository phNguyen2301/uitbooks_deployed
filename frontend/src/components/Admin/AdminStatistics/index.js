import React from 'react';
import Featured from './featured/Featured.js';
import './index.scss';
import Widget from './Widget/Widget';
// import Chart from './chart/Chart.jsx'
import { Col, Container, Row } from 'react-bootstrap';
import Chart from './chart/Chart.js';
import TableRow from './StaticAdminTable/TableRow.js';

const AdminStatistics = (props) => {
  return (
    <div className='AdminStatistics'>
      <Container>
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='book' />
          <Widget type='earning' />
        </div>
        <div className='charts'>
          <Row>
            <Col xs='12' md='5' lg='5'>
              <Featured />
            </Col>
            <Col xs='12' md='7' lg='7'>
              <Chart title='6 tháng trước (doanh thu)' aspect={2 / 1} />
            </Col>
          </Row>
        </div>
        <TableRow />
      </Container>
    </div>
  );
};

AdminStatistics.propTypes = {};

export default AdminStatistics;
