var webdesign_plug = {
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    //font style
    ctx.restore();
    var fontSize = (height / 50).toFixed(2);
    ctx.font ="200 "+ fontSize + "em 'Titillium Web'";
    ctx.fillStyle="#3d4762";
    ctx.textBaseline = "middle";

    //calculate text position
    var text = "90%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

var ctx = document.getElementById('webDesign').getContext('2d');
var webdesign = new Chart(ctx, {
  plugins: [webdesign_plug],
  type: 'doughnut',
  // The data for our dataset
  data: {
      datasets: [{
          labels:['this','that'],
          borderWidth:0,
          backgroundColor: ['#30bae8','#dee7ec'],
          data: [90, 10],
        },
    ]
  },

  // Configuration options go here
  options: {
    events:[],
    cutoutPercentage:85,
    responsive:true,
    legend:{
      display: false,
    },
  }
});

var htmlcss_plug = {
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    //font style
    ctx.restore();
    var fontSize = (height / 50).toFixed(2);
    ctx.font ="200 "+ fontSize + "em 'Titillium Web'";
    ctx.fillStyle="#3d4762";
    ctx.textBaseline = "middle";

    //calculate text position
    var text = "75%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

var ctx = document.getElementById('htmlCss').getContext('2d');
var htmlcss = new Chart(ctx, {
  plugins: [htmlcss_plug],
  type: 'doughnut',
  // The data for our dataset
  data: {
      datasets: [{
          labels:['this','that'],
          borderWidth:0,
          backgroundColor: ['#d74681','#dee7ec'],
          data: [75, 25],
        },
    ]
  },

  // Configuration options go here
  options: {
    events:[],
    cutoutPercentage:85,
    responsive:true,
    legend:{
      display: false,
    },
  }
});

var graphicdesign_plug = {
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    //font style
    ctx.restore();
    var fontSize = (height / 50).toFixed(2);
    ctx.font ="200 "+ fontSize + "em 'Titillium Web'";
    ctx.fillStyle="#3d4762";
    ctx.textBaseline = "middle";

    //calculate text position
    var text = "70%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

var ctx = document.getElementById('graphicDesign').getContext('2d');
var graphicdesign = new Chart(ctx, {
  plugins: [graphicdesign_plug],
  type: 'doughnut',
  // The data for our dataset
  data: {
      datasets: [{
          labels:['this','that'],
          borderWidth:0,
          backgroundColor: ['#15c6a9','#dee7ec'],
          data: [70, 30],
        },
    ]
  },

  // Configuration options go here
  options: {
    events:[],
    cutoutPercentage:85,
    responsive:true,
    legend:{
      display: false,
    },
  }
});

var uiux_plug = {
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    //font style
    ctx.restore();
    var fontSize = (height / 50).toFixed(2);
    ctx.font ="200 "+ fontSize + "em 'Titillium Web'";
    ctx.fillStyle="#3d4762";
    ctx.textBaseline = "middle";

    //calculate text position
    var text = "85%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

var ctx = document.getElementById('uiux').getContext('2d');
var uiux = new Chart(ctx, {
  plugins: [uiux_plug],
  type: 'doughnut',
  // The data for our dataset
  data: {
      datasets: [{
          labels:['this','that'],
          borderWidth:0,
          backgroundColor: ['#ec7c4c','#dee7ec'],
          data: [85, 15],
        },
    ]
  },

  // Configuration options go here
  options: {
    events:[],
    cutoutPercentage:85,
    responsive:true,
    legend:{
      display: false,
    },
  }
});
