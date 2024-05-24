export const optionRight: any = {
  indexAxis: 'y' as const,
  responsive: true,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
      max: 7,
    },
    y: {
      position: 'right',
      grid: {
        display: false,
      },
      min: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    callbacks: {
      beforeInit(chart: any) {
        console.log('be');
        // reference of original fit function
        const originalFit = chart.legend.fit;

        // override the fit function
        chart.legend.fit = function fit() {
          // call original function and bind scope in order to use `this` correctly inside it
          originalFit.bind(chart.legend)();
          // increase the width to add more space
          this.width += -5;
        };
      },
    },
  },
};

export const optionLeft: any = {
  indexAxis: 'y' as const,
  responsive: true,
  scales: {
    x: {
      reverse: true,
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
