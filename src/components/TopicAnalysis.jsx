import React from "react";

// Components
import PrimaryText from "./PrimaryText";

// Utils
import { generateBarColor } from "../utils/helperFunctions";

const TopicAnalysis = () => {
	const topicsData = [
		{ name: "Topic 1", value: 14 },
		{ name: "Topic 2", value: 10 },
		{ name: "Topic 3", value: 12 },
		{ name: "Topic 4", value: 6 },
		{ name: "Topic 5", value: 13 },
		{ name: "Topic 6", value: 8 },
		{ name: "Topic 7", value: 5 },
		{ name: "Topic 8", value: 10 },
		{ name: "Topic 9", value: 13 },
		{ name: "Topic 10", value: 11 },
		{ name: "Topic 11", value: 11 },
		{ name: "Topic 12", value: 8 },
		{ name: "Topic 13", value: 14 },
		{ name: "Topic 14", value: 10 },
		{ name: "Topic 15", value: 11 },
	];
	const maxValue = Math.max(...topicsData.map((data) => data.value));

	return (
		<div className="w-full h-full">
			<div className="my-3">
				<PrimaryText>Topic Analysis</PrimaryText>
			</div>

			<div className="flex flex-col gap-0">
				{topicsData?.map((data) => {
					return (
						<div key={data?.name} className="flex justify-between gap-5 items-center">
							<span className="min-w-[64px]">{data?.name}</span>
							<div className="w-full">
								<div
									className="rounded-md h-4"
									style={{
										backgroundColor: generateBarColor(data.value, maxValue),
										width: `${(data.value / maxValue) * 100}%`,
									}}
								></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopicAnalysis;
