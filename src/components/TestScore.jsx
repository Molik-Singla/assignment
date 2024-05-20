import React, { useEffect, useState } from "react";
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

import PrimaryText from "./PrimaryText";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const TestScore = ({ currentChapter }) => {
	const [valuesData, setValuesData] = useState([]);
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

	useEffect(() => {
		setValuesData(currentChapter?.scoreDistributionWeekly.map((week) => week.score));
	}, [currentChapter]);

	return (
		<div className="rounded-2xl bg-white p-4 flex flex-col gap-6 items-center w-full justify-around lg:p-8  max-w-lg">
			<div className="flex flex-row justify-around gap-1 w-full">
				<div className="flex flex-col gap-1">
					<PrimaryText size="l">Test Score</PrimaryText>
					<p className="text-2xl font-bold">{currentChapter?.scoreDistributionWeekly[0]?.score}</p>
				</div>

				<div>
					<PrimaryText>Weekly Test All</PrimaryText>
				</div>
			</div>
			<Line data={data} options={options} />
		</div>
	);
};

export default TestScore;
