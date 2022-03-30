import React from 'react';
import { Card } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { hexToRGBA } from './hexToRGBA';

import colors from '../../variables.module.scss';

// See https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components
// & http://www.chartjs.org/
const data = {
  labels: ['Qual', 'Sol Pres.', 'Sol Acc.', 'Proposal', 'Pending'],
  datasets: [
    {
      data: [300, 250, 200, 150, 100],
      borderWidth: 1,
      backgroundColor: [
        hexToRGBA(colors.tertiary, 0.5),
        hexToRGBA(colors.primary, 0.5),
        hexToRGBA(colors.secondary, 0.5),
        hexToRGBA(colors.quaternary, 0.5),
        hexToRGBA(colors.quinary, 0.5),
        // hexToRGBA(colors.tertiaryDark, 0.5),
        // hexToRGBA(colors.primaryDark, 0.5),
      ],
      borderColor: [
        hexToRGBA(colors.tertiaryDark, 0.5),
        hexToRGBA(colors.primaryDark, 0.5),
        hexToRGBA(colors.secondaryDark, 0.5),
        hexToRGBA(colors.quaternaryDark, 0.5),
        hexToRGBA(colors.quinaryDark, 0.5),
        // hexToRGBA(colors.tertiaryDark, 0.5),
        // hexToRGBA(colors.primaryDark, 0.5),
      ],
      hoverBackgroundColor: [
        hexToRGBA(colors.tertiary, 0.7),
        hexToRGBA(colors.primary, 0.7),
        hexToRGBA(colors.secondary, 0.7),
        hexToRGBA(colors.quaternary, 0.7),
        hexToRGBA(colors.quinary, 0.7),
        // hexToRGBA(colors.tertiary, 0.7),
        // hexToRGBA(colors.primary, 0.7),
      ],
      hoverBorderColor: [
        hexToRGBA(colors.tertiaryDark, 0.7),
        hexToRGBA(colors.primaryDark, 0.7),
        hexToRGBA(colors.secondaryDark, 0.7),
        hexToRGBA(colors.quaternaryDark, 0.7),
        hexToRGBA(colors.quinaryDark, 0.7),
        // hexToRGBA(colors.tertiaryDark, 0.7),
        // hexToRGBA(colors.primaryDark, 0.7),
      ],
    },
  ],
};

const Pipeline = () => (
  <Card title="Pipeline" id="forecast" className="pipeline">
    <Doughnut
      data={data}
      options={{
        legend: { labels: { fontColor: hexToRGBA(colors.text, 1) } },
        maintainAspectRatio: false,
      }}
    />
  </Card>
);

export default Pipeline;
