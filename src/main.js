import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard.js';
import FinalAccounts from './containers/accounts/accountsContainer.js';
import FinalContacts from './containers/contacts/contactsContainer.js';
import FinalOpportunities from './containers/opportunities/opportunitiesContainer.js';
import FinalMobile from './containers/mobile/mobileContainer.js';
import FinalDetails from './containers/details/detailsContainer.js';

// Routing done here
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/accounts" component={FinalAccounts} />
          <Route exact path="/contacts" component={FinalContacts} />
          <Route exact path="/opportunities" component={FinalOpportunities} />
          <Route
            exact
            path="/mobile"
            render={() => <FinalMobile visInfo={this.props?.visInfo} />}
          />
          <Route path="/*/*/details" component={FinalDetails} />
        </Switch>
      </main>
    );
  }
}

Main.propTypes = {
  visInfo: PropTypes.object,
};
