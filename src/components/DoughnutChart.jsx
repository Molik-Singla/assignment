import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = ({ data }) => {
	const chartData = {
		labels: data.items.map((item) => item.label),
		datasets: [
			{
				data: data.items.map((item) => item.value),
				backgroundColor: ["#FF6384", "#39e33e", "#FFCE56"],
				hoverBackgroundColor: ["#FF6384", "#39e33e", "#FFCE56"],
				borderWidth: 1, // This line reduces the border thickness
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
			},
		},
		cutout: "76%",
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<div style={{ position: "relative", width: "140px", height: "140px" }}>
			<Doughnut data={chartData} options={options} />
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					fontSize: "36px",
					fontWeight: "bold",
				}}
			>
				{data.total}
			</div>
		</div>
	);
};

export default DoughnutChart;
