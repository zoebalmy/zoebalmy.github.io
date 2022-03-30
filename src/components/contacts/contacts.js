import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import DelayLink from 'react-delay-link';

// See https://ant.design/components/table/

const ContactLinkComponent = (text, record) => (
  <a>
    <DelayLink
      delay={500}
      to={'/contacts/' + record._id + '/details'}
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
    width: 150,
    render: ContactLinkComponent,
  },
  {
    title: 'Account',
    dataIndex: 'account',
    key: 'account',
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 150,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: 150,
  },
];

export default class Contacts extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onContactsRequest();
  }
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.contactList}
        loading={this.props.loading}
        style={{ margin: '0px 15px' }}
        size="middle"
        className="whole-page-table"
        scroll={{ y: '100vh' }}
      />
    );
  }
}

Contacts.propTypes = {
  onContactsRequest: PropTypes.func,
  contactList: PropTypes.array,
  loading: PropTypes.bool,
};
