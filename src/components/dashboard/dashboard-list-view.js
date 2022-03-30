import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';
import { Link } from 'react-router-dom';

// See https://ant.design/components/table/

const OpportunityLinkComponent = (text, record) => (
  <Link to={'/opportunities/' + record._id + '/details'}>
    <span>{text}</span>
  </Link>
);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: OpportunityLinkComponent,
  },
  {
    title: 'Account',
    dataIndex: 'account',
    key: 'account',
    width: 100,
  },
];

export default class ListView extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onOpportunitiesLoad();
  }

  render() {
    return (
      <Card title="Open Opportunities" id="list-view">
        <Table
          columns={columns}
          dataSource={this.props.opportunitiesList}
          loading={this.props.loading}
          size="middle"
          className="card-table"
          scroll={{ y: '100vh' }}
        />
      </Card>
    );
  }
}

ListView.propTypes = {
  onOpportunitiesLoad: PropTypes.func,
  opportunitiesList: PropTypes.array,
  loading: PropTypes.bool,
};
