import React, { useEffect, useState } from "react";
// Components
import PrimaryText from "./PrimaryText";

// Utils
const valueWiseColor = {
	0: "bg-gray-100",
	1: "bg-green-100",
	2: "bg-green-200",
	3: "bg-green-300",
	4: "bg-green-400",
	5: "bg-green-500",
};

const HeatMap = () => {
	const [dataForHeatMap, setDataForHeatMap] = useState({});
	const totalActiveDays = 35;
	const currentStreak = 2;
	const maxStreak = 11;

	// Just add date wise value for each day
	const dateWiseData = [
		{ date: "10-04-2024", value: 1 },
		{ date: "11-04-2024", value: 2 },
		{ date: "12-04-2024", value: 0 },
		{ date: "13-04-2024", value: 3 },
		{ date: "14-04-2024", value: 4 },
		{ date: "15-04-2024", value: 3 },
		{ date: "16-04-2024", value: 4 },
		{ date: "17-04-2024", value: 5 },
		{ date: "18-04-2024", value: 5 },
		{ date: "19-04-2024", value: 2 },
		{ date: "20-04-2024", value: 4 },
		{ date: "21-04-2024", value: 1 },
		{ date: "22-04-2024", value: 4 },
		{ date: "23-04-2024", value: 3 },
		{ date: "24-04-2024", value: 4 },
		{ date: "25-04-2024", value: 1 },
		{ date: "26-04-2024", value: 2 },
		{ date: "27-04-2024", value: 0 },
		{ date: "28-04-2024", value: 0 },
		{ date: "29-04-2024", value: 1 },
		{ date: "30-04-2024", value: 4 },
		{ date: "01-05-2024", value: 3 },
		{ date: "02-05-2024", value: 5 },
		{ date: "03-05-2024", value: 5 },
		{ date: "04-05-2024", value: 4 },
		{ date: "05-05-2024", value: 3 },
		{ date: "06-05-2024", value: 4 },
		{ date: "07-05-2024", value: 4 },
		{ date: "08-05-2024", value: 4 },
		{ date: "09-05-2024", value: 4 },
		{ date: "10-05-2024", value: 4 },
		{ date: "11-05-2024", value: 5 },
		{ date: "12-05-2024", value: 3 },
		{ date: "13-05-2024", value: 1 },
		{ date: "14-05-2024", value: 0 },
		{ date: "15-05-2024", value: 0 },
		{ date: "16-05-2024", value: 0 },
		{ date: "17-05-2024", value: 5 },
		{ date: "18-05-2024", value: 3 },
		{ date: "19-05-2024", value: 2 },
		{ date: "20-05-2024", value: 4 },
		{ date: "21-05-2024", value: 4 },
		{ date: "22-05-2024", value: 4 },
		{ date: "23-05-2024", value: 0 },
		{ date: "24-05-2024", value: 4 },
		{ date: "25-05-2024", value: 1 },
		{ date: "26-05-2024", value: 4 },
		{ date: "27-05-2024", value: 3 },
		{ date: "28-05-2024", value: 4 },
		{ date: "29-05-2024", value: 5 },
		{ date: "30-05-2024", value: 4 },
		{ date: "31-05-2024", value: 4 },
		{ date: "01-06-2024", value: 0 },
		{ date: "02-06-2024", value: 1 },
		{ date: "03-06-2024", value: 2 },
	];

	const monthsData = [
		{ index: 0, month: "January", days: 31 },
		{ index: 1, month: "February", days: 28 },
		{ index: 2, month: "March", days: 31 },
		{ index: 3, month: "April", days: 30 },
		{ index: 4, month: "May", days: 31 },
		{ index: 5, month: "June", days: 30 },
		{ index: 6, month: "July", days: 31 },
		{ index: 7, month: "August", days: 31 },
		{ index: 8, month: "September", days: 30 },
		{ index: 9, month: "October", days: 31 },
		{ index: 10, month: "November", days: 30 },
		{ index: 11, month: "December", days: 31 },
	];

	function getMonthFromDate(dateStr) {
		const [day, month, year] = dateStr.split("-");
		const monthIndex = parseInt(month, 10) - 1;
		return monthsData[monthIndex]?.month || null;
	}

	const questionDoneOnEachDayOfMonth = () => {
		const monthIWantToCheckOnly = [];
		dateWiseData?.map((data) => {
			const month = getMonthFromDate(data.date);
			if (!monthIWantToCheckOnly.includes(month)) monthIWantToCheckOnly.push(month);
		});

		const finalDataSet = {};

		monthIWantToCheckOnly.forEach((month) => {
			let questionDoneOnEachDayOfMonth = [];

			const daysInCurrentMonth = monthsData.find((data) => data.month === month)?.days || 0;
			for (let i = 1; i <= daysInCurrentMonth; i++) {
				const monthNum = monthsData.find((data) => data.month === month)?.index + 1 || 0;
				const date = `${i < 10 ? `0${i}` : i}-${monthNum < 10 ? `0${monthNum}` : monthNum}-2024`;
				const value = dateWiseData.find((data) => data.date === date)?.value || 0;
				questionDoneOnEachDayOfMonth.push({ date, value });
			}

			finalDataSet[month] = questionDoneOnEachDayOfMonth;
		});

		setDataForHeatMap(finalDataSet);
	};

	useEffect(() => {
		questionDoneOnEachDayOfMonth();
	}, []);

	return (
		<div className="rounded-2xl flex flex-col bg-white p-4 h-full w-full lg:px-8">
			<div className="INFO flex w-full justify-between flex-wrap gap-y-3 md:flex-row">
				<p className="text-sm font-semibold">
					<span>67 </span>
					<span className="text-gray-500">submissions in last 6 months</span>
				</p>
				<p className="text-sm font-semibold">
					<span className="text-gray-500">Total Active Days : </span>
					<span>{totalActiveDays}</span>
				</p>
				<p className="text-sm font-semibold">
					<span className="text-gray-500">Current Streak: </span>
					<span>{currentStreak}</span>
				</p>
			</div>

			<section className="mt-3 flex justify-between flex-col gap-y-6 md:flex-row flex-wrap">
				<section className="MONTH HEAT_MAP flex gap-4 flex-wrap">
					{Array.from(Object.entries(dataForHeatMap))?.map(([month, data]) => {
						return (
							<section className="flex flex-col items-center">
								<div className="grid grid-rows-7 grid-flow-col basis-4 gap-[2px]">
									{data.map((dayData) => {
										let color = valueWiseColor[dayData.value];

										if (dayData.value > 5) color = "bg-green-600";
										return (
											<span className={`group w-3 h-3 rounded-sm relative ${color}`}>
												<div className="hidden w-12 h-6 bg-gray-100 rounded-lg justify-center items-center text-gray-800 font-semibold text-sm group-[:hover]:flex absolute z-20 top-5">
													{dayData?.value}
												</div>
											</span>
										);
									})}
								</div>

								<p className="mt-1 text-xs text-gray-400 font-semibold">{month}</p>
							</section>
						);
					})}
				</section>

				<div className="flex flex-col items-center">
					<p className="text-3xl md:text-6xl font-bold">{maxStreak}</p>
					<PrimaryText>Max Streak</PrimaryText>
				</div>
			</section>
		</div>
	);
};

export default HeatMap;
