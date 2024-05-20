import React, { useEffect, useState } from "react";

// Components
import Sidebar from "../components/Sidebar";
import TestScore from "../components/TestScore";
import QuestionSolved from "../components/QuestionSolved";
import TotalTest from "../components/TotalTest";
import TopicAnalysis from "../components/TopicAnalysis";
import Ranking from "../components/Ranking";
import Awards from "../components/Awards";
import TotalQuestions from "../components/TotalQuestions";
import HeatMap from "../components/HeatMap";

const Home = () => {
	const chaptersData = [
		{
			id: 1,
			chapter: "Chapter 1",
			totalTest: 6,
			scoreDistributionWeekly: [
				{
					week: "Week 1",
					score: 45,
				},
				{
					week: "Week 2",
					score: 34,
				},
				{
					week: "Week 3",
					score: 56,
				},
				{
					week: "Week 4",
					score: 67,
				},
				{
					week: "Week 5",
					score: 12,
				},
				{
					week: "Week 6",
					score: 98,
				},
			],
		},
		{
			id: 2,
			chapter: "Chapter 2",
			totalTest: 8,
			scoreDistributionWeekly: [
				{
					week: "Week 1",
					score: 45,
				},
				{
					week: "Week 2",
					score: 34,
				},
				{
					week: "Week 3",
					score: 56,
				},
				{
					week: "Week 4",
					score: 67,
				},
				{
					week: "Week 5",
					score: 12,
				},
				{
					week: "Week 6",
					score: 98,
				},
				{
					week: "Week 7",
					score: 34,
				},
				{
					week: "Week 8",
					score: 78,
				},
			],
		},
		{
			id: 3,
			chapter: "Chapter 3",
			totalTest: 9,
			scoreDistributionWeekly: [
				{
					week: "Week 1",
					score: 45,
				},
				{
					week: "Week 2",
					score: 34,
				},
				{
					week: "Week 3",
					score: 56,
				},
				{
					week: "Week 4",
					score: 67,
				},
				{
					week: "Week 5",
					score: 12,
				},
				{
					week: "Week 6",
					score: 98,
				},
				{
					week: "Week 7",
					score: 102,
				},
				{
					week: "Week 8",
					score: 56,
				},
				{
					week: "Week 9",
					score: 89,
				},
			],
		},
	];

	const [currentChapter, setCurrentChapter] = useState(chaptersData[0]);

	const handleChangeChapter = (chapterId) => {
		const findedChapter = chaptersData.find((chapter) => chapter.id === chapterId);
		if (findedChapter) setCurrentChapter(findedChapter);
	};

	return (
		<section className="w-full h-screen flex">
			<Sidebar />
			<section className="MAIN_SECTION bg-gray-200 w-full h-full min-h-screen p-4 lg:p-8 lg:px-20 overflow-y-auto">
				<section className="TOP flex gap-6 items-stretch flex-col lg:flex-row">
					<TotalQuestions />
					<HeatMap />
				</section>
				<section className="w-full flex flex-col lg:flex-row lg:gap-x-14">
					<section className="LEFT mt-8 w-full lg:w-[50%] flex flex-col gap-8 items-center">
						<TotalTest
							data={chaptersData}
							handleChangeChapter={handleChangeChapter}
							currentChapter={currentChapter}
						/>
						<TestScore currentChapter={currentChapter} />

						<Awards />
						<TopicAnalysis />
					</section>
					<section className="RIGHT mt-8 w-full lg:w-[50%] flex flex-col gap-8 items-center">
						<QuestionSolved />
						<Ranking />
					</section>
				</section>
			</section>
		</section>
	);
};

export default Home;
