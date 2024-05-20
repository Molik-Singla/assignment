import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const valuesData = [12, 23, 39, 18, 78, 99, 123, 96, 150, 199];
const data = {
	labels: valuesData?.map((value, ind) => {
		if (ind === 0) return "2022";
		else if (ind === valuesData.length - 1) return "2024";

		return "";
	}),
	datasets: [
		{
			label: "Test Scores",
			data: valuesData,
			borderColor: "#FFD700",
			backgroundColor: "#FFD700",
			fill: false,
			tension: 0.4,
		},
	],
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
	scales: {
		x: {
			display: true,
			grid: {
				display: false,
			},
			ticks: {
				display: true,
				color: "rgba(0, 0, 0, 0.5)",
			},
			border: {
				display: false,
			},
		},
		y: {
			display: false,
			grid: {
				display: false,
			},
		},
	},
};

const Example = () => {
	return (
		<div className="rounded-2xl bg-white p-4 flex gap-6 items-center w-4/5 justify-around md:p-8">
			<Line data={data} options={options} />
		</div>
	);
};

export default Example;
