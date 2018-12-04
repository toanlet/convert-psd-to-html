


$(document).ready(function () {
	$(".menu").click(function () {
		$(".hidden").toggle();
	});

});

Chart.pluginService.register({
	beforeDraw: function (chart) {
		if (chart.config.options.elements.center) {
			//Get ctx from string
			var ctx = chart.chart.ctx;

			//Get options from the center object in options
			var centerConfig = chart.config.options.elements.center;
			var fontStyle = centerConfig.fontStyle || "Arial";
			var txt = centerConfig.text;
			var color = centerConfig.color || "#000";
			var sidePadding = centerConfig.sidePadding || 20;
			var sidePaddingCalculated = sidePadding / 100 * (chart.innerRadius * 2);
			//Start with a base font of 30px
			ctx.font = "30px " + fontStyle;

			//Get the width of the string and also the width of the element minus 10 to give it 5px side padding
			var stringWidth = ctx.measureText(txt).width;
			var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

			// Find out how much the font can grow in width.
			var widthRatio = elementWidth / stringWidth;
			var newFontSize = Math.floor(30 * widthRatio);
			var elementHeight = chart.innerRadius * 2;

			// Pick a new font size so it will not be larger than the height of label.
			//var fontSizeToUse = Math.min(newFontSize, elementHeight);
			var fontSizeToUse = "20";

			//Set font settings to draw it correctly.
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
			var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
			ctx.font = "bold " + fontSizeToUse + "px " + fontStyle;
			ctx.fillStyle = color;

			//Draw text in center
			ctx.fillText(txt, centerX, centerY);
		}
	}
});
var ctx = document.getElementById("myChart").getContext("2d");
var ctx1 = document.getElementById("myChart1").getContext("2d");
var ctx2 = document.getElementById("mychart").getContext("2d");
var config = {
	type: "doughnut",
	data: {
		datasets: [
			{
				data: [50, 50],
				backgroundColor: ["#e76c90", "#f0eff4"],
				label: "Dataset 1"
			}
		],
		labels: ["Pink", "Grey"]
	},
	options: {
		responsive: true,
		cutoutPercentage: 85,
		// rotation: 0.7 * Math.PI,
		legend: {
			display: false
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		elements: {
			center: {
				text: "50%",
				color: "#2c304d", // Default is #000000
				fontStyle: "Montserrat", // Default is Arial
				sidePadding: 30 // Defualt is 20 (as a percentage)
			}
		}
	}
};
var config1 = {
	type: "doughnut",
	data: {
		datasets: [
			{
				data: [50, 50],
				backgroundColor: ["#ffffff", "#9eb9f3"],
				label: "Dataset 1"
			}
		],
		labels: ["white", "blue"]
	},
	options: {
		responsive: true,
		cutoutPercentage: 85,
		// rotation: 0.7 * Math.PI,
		legend: {
			display: false
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		elements: {
			center: {
				text: "50%",
				color: "#FFFFFF", // Default is #000000
				fontStyle: "Montserrat", // Default is Arial
				sidePadding: 30 // Defualt is 20 (as a percentage)
			}
		}
	}
};
var config2 = {
	type: "doughnut",
	data: {
		datasets: [
			{
				data: [60, 35],
				backgroundColor: ["#9eb9f3", "#f0eff4"],
				label: "Dataset 1"
			}
		],
		labels: ["white", "blue"]
	},
	options: {
		responsive: true,
		cutoutPercentage: 85,
		// rotation: 0.7 * Math.PI,
		legend: {
			display: false
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		elements: {
			center: {
				text: "65%",
				color: "#000", // Default is #000000
				fontStyle: "Montserrat", // Default is Arial
				sidePadding: 30 // Defualt is 20 (as a percentage)
			}
		}
	}
};
var pie = new Chart(ctx, config);
var pie1 = new Chart(ctx1, config1);
var pie2 = new Chart(ctx2, config2);
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var width1 = ctx1.canvas.width;
var height1 = ctx1.canvas.height;

ctx.font = "normal 20px 'Arial'";
ctx.fillStyle = "black";
ctx1.fillStyle = "white";
ctx.textBaseline = "middle";
ctx.fillText("60%", width / 2 - 20, width / 2, 200);
ctx1.fillText("60%", width / 2 - 20, width / 2, 200);


