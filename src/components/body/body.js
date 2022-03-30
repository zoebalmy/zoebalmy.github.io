import React from 'react';
import PropTypes from 'prop-types';
import Main from '../../main.js';
import VerticalMenu from './vertical-menu';
import { Icon } from 'antd';

import './body.scss';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    // visible -> whether the modal should show or not (from "Add New")
    // OKLoading -> created a loading effect for the clicking ok on the modal
    // addNewFormData -> this is the information that gets updated, and eventualyl sent with Add New
    this.state = {
      visible: false,
      OKLoading: false,
      addNewFormData: {
        value: 'Accounts',
        fieldOne: '',
        fieldTwo: '',
        fieldThree: '',
      },
    };
  }

  // Open Modal
  _onAddNew(e) {
    e.preventDefault();
    this.setState({
      visible: true,
    });
  }

  // Close Modal
  _onCancel(e) {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  }

  //
  _onOK(e) {
    e.preventDefault();

    // Loading on OK
    this.setState({
      OKLoading: true,
    });

    // Wait 1 second then stop loading on OK, close modal, set the AddNewFormdata into local storage as JSON
    // set a loading parameter as false used from details page
    setTimeout(() => {
      this.setState({
        OKLoading: false,
        visible: false,
      });

      // Set local Storage objs
      localStorage.setItem(
        'addNewFormData',
        JSON.stringify(this.state.addNewFormData)
      );
      localStorage.setItem('loading', false);

      // Force change to new details page with appropriate data stored in localStorage
      window.location.href = this.state.addNewFormData.value + '/new/details';
    }, 1000);
  }

  // Change <select> <option> value and set State
  _onHandleSelectChange(value) {
    let addNewFormData = Object.assign({}, this.state.addNewFormData);
    addNewFormData['value'] = value;
    this.setState({
      addNewFormData,
    });
  }

  // Change object that gets changed in Modal
  _onHandleChange(e) {
    let addNewFormData = Object.assign({}, this.state.addNewFormData);
    addNewFormData[e.target.name] = e.target.value;

    this.setState({
      addNewFormData,
    });
  }

  render() {
    return (
      <div className="body-container">
        <div className="app-container">
          {this.props.title === 'Mobile' ? null : (
            <VerticalMenu
              title={this.props.title}
              visInfo={this.props?.visInfo}
            ></VerticalMenu>
          )}
          <div className="main-content">
            <Main visInfo={this.props?.visInfo} />
          </div>
          <div className="pendo-sales-engineering-footer">
            <span>
              Made with{' '}
              <span>
                <Icon type="heart" className="heart" />
              </span>{' '}
              by Pendo Sales Engineering
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  title: PropTypes.string,
  visInfo: PropTypes.object,
};
