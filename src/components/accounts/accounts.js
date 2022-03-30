import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import DelayLink from 'react-delay-link';

// See https://ant.design/components/table/

const AccountLinkComponent = (text, record) => (
  <a>
    <DelayLink
      delay={500}
      to={'/accounts/' + record._id + '/details'}
      replace={false}
    >
      <span>{text}</span>
    </DelayLink>
  </a>
);

const AccountIndustryComponent = (text) => <span>{text}</span>;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: AccountLinkComponent,
  },
  {
    title: 'Rep',
    dataIndex: 'rep',
    key: 'rep',
    width: 150,
  },
  {
    title: 'Territory',
    dataIndex: 'territory',
    key: 'territory',
    width: 150,
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
    width: 150,
    render: AccountIndustryComponent,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
];

export default class Accounts extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onAccountsLoad();
  }
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.accounts}
        loading={this.props.loading}
        style={{ margin: '0px 15px' }}
        size="middle"
        className="whole-page-table"
        scroll={{ y: '100vh' }}
      />
    );
  }
}

Accounts.propTypes = {
  onAccountsLoad: PropTypes.func,
  accounts: PropTypes.array,
  loading: PropTypes.bool,
};
