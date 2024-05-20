import React from "react";
import Divider from "./Divider";
import PrimaryText from "./PrimaryText";
import DoughnutChart from "./DoughnutChart";

const QuestionSolvedModule = () => {
	const data = [
		{
			title: "Module 1",
			total: 73,
			items: [
				{ label: "Intro 1", value: 40 },
				{ label: "Intro 2", value: 22 },
				{ label: "Intro 3", value: 11 },
			],
		},
		{
			title: "Module 2",
			total: 32,
			items: [
				{ label: "Chapter 1", value: 14 },
				{ label: "Chapter 2", value: 11 },
				{ label: "Chapter 3", value: 7 },
			],
		},
	];

	return (
		<section className="w-4/5 rounded-2xl bg-white p-4 flex flex-col items-center md:px-8">
			<PrimaryText>Question Solved</PrimaryText>

			<div className="w-full flex flex-col">
				{data.map((module, index) => (
					<section key={index}>
						{index < data?.length && (
							<div className="flex justify-center my-4 mb-2">
								<Divider />
							</div>
						)}
						<div className="my-3 flex justify-center">
							<PrimaryText>{module?.title}</PrimaryText>
						</div>
						<div className="flex gap-4 justify-between w-full items-center">
							<DoughnutChart data={module} />

							<div className="flex flex-col gap-3">
								{module?.items?.map((singleItem, index) => {
									return (
										<div
											key={999999 + index}
											className="flex gap-6 bg-gray-100 p-1 px-4 rounded-lg w-1/2 min-w-[154px] justify-between"
										>
											<PrimaryText>{singleItem?.label}</PrimaryText>
											<PrimaryText>{singleItem?.value}</PrimaryText>
										</div>
									);
								})}
							</div>
						</div>
					</section>
				))}
			</div>
		</section>
	);
};

export default QuestionSolvedModule;
