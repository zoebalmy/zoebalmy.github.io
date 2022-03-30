import React from 'react';
import { Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import { hexToRGBA } from './hexToRGBA';

import colors from '../../variables.module.scss';

// See https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components
// & http://www.chartjs.org/
const data = {
  labels: ['Mona', 'Felix', 'Jess', 'Ravi', 'Kam', 'Walter'],
  datasets: [
    {
      label: 'Attained',
      backgroundColor: hexToRGBA(colors.tertiary, 0.5),
      borderColor: hexToRGBA(colors.tertiaryDark, 0.5),
      borderWidth: 1,
      hoverBackgroundColor: hexToRGBA(colors.tertiary, 0.7),
      hoverBorderColor: hexToRGBA(colors.tertiaryDark, 0.7),
      data: [30000, 135000, 47000, 25000, 56000, 55000],
    },
    {
      label: 'Goal',
      backgroundColor: hexToRGBA(colors.primary, 0.5),
      borderColor: hexToRGBA(colors.primaryDark, 0.5),
      borderWidth: 1,
      hoverBackgroundColor: hexToRGBA(colors.primary, 0.7),
      hoverBorderColor: hexToRGBA(colors.primaryDark, 0.7),
      data: [50000, 150000, 80000, 65000, 100000, 120000],
    },
  ],
};

const QuoteAttainment = () => (
  <Card title="Quota Attainment" id="quota" className="quota">
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                fontColor: hexToRGBA(colors.text, 1),
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                fontColor: hexToRGBA(colors.text, 1),
                callback: function (value, index, values) {
                  return (
                    '$' +
                    value.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')
                  );
                },
              },
            },
          ],
        },
      }}
    />
  </Card>
);

export default QuoteAttainment;
