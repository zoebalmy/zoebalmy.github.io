import React from 'react';
import Forecast from '../dashboard/forecast.js';
import FinalListView from '../../containers/dashboard/dashOppsContainer.js';
import FinalPipeline from '../../containers/pipeline/pipelineContainer.js';
import QuotaAttainment from '../dashboard/quota-attainment.js';

import './dashboard.scss';

// Simple enough, takes the different components and displays them in the designated CSS Grid
const Dashboard = () => (
  <div className="dashboard-container">
    <div className="dashboard-left">
      <Forecast />
      <div className="dashboard-left--bottom">
        <QuotaAttainment />
        <FinalPipeline />
      </div>
    </div>
    <FinalListView />
  </div>
);

export default Dashboard;
