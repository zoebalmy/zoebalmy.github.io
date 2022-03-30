import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import DelayLink from 'react-delay-link';

// See https://ant.design/components/table/

const OpportunityLinkComponent = (text, record) => (
  <a>
    <DelayLink
      delay={500}
      to={'/opportunities/' + record._id + '/details'}
      replace={false}
    >
      <span>{text}</span>
    </DelayLink>
  </a>
);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 250,
    render: OpportunityLinkComponent,
  },
  {
    title: 'Account',
    dataIndex: 'account',
    key: 'account',
    width: 150,
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
    width: 150,
  },
  {
    title: 'Rep',
    dataIndex: 'rep',
    key: 'rep',
    width: 150,
  },
];

export default class Opportunities extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onOpportunitiesLoad();
  }
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.opportunitiesList}
        loading={this.props.loading}
        style={{ margin: '0px 15px' }}
        size="middle"
        className="whole-page-table"
        scroll={{ y: '100vh' }}
      />
    );
  }
}

Opportunities.propTypes = {
  onOpportunitiesLoad: PropTypes.func,
  opportunitiesList: PropTypes.array,
  loading: PropTypes.bool,
};
