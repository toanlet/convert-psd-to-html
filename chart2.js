var ctx = document.getElementById('myChart2');
var ctx1 = document.getElementById('line');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Delivered",
      backgroundColor: '#5d5386',
      borderColor: '#e4e8f0',
      data: [80, 70, 60, 40, 80, 30, 65, 40, 80, 70, 60, 80],
    },
    {
      label: "Estimated",
      backgroundColor: '#e4e8f0',
      borderColor: '#e4e8f0',
      data: [20, 50, 20, 30, 30, 50, 50, 80, 60, 50, 40, 30],
    }

    ]
  },

  // Configuration options go here
  options: {
    barThickness: 10

    ,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true, display: false
      }]
    },
    tooltips: {
      xPadding: 30,
      yPadding: 30,
    },
    pointStyle: 'rectRot',
    pointRadius: 5,
    legend: {
      position: 'bottom',
      // display: true,
      usePointStyle: false,

      labels: {
        // This more specific font property overrides the global property
        fontColor: 'blue',
        // fontSize: '10',
        fontFamily: 'Roboto'
      }
    }
  }
});
var chart1 = new Chart(ctx1, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [{
      data: [{
        x: 10,
        y: 15
      }, {
        x: 20,
        y: 40
      },
      {
        x: 30,
        y: 20
      }, {
        x: 40,
        y: 35
      },
      {
        x: 45,
        y: 20
      }, {
        x: 60,
        y: 50
      }


      ],
      backgroundColor: 'white',
      borderColor: '#08a6c3'
    }

    ]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
      usePointStyle: true
    },
    scales: {
      xAxes: [{
        stacked: true, display: false
      }],
      yAxes: [{
        stacked: true, display: false
      }]
    }
  }
});
