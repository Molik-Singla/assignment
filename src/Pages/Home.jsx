import React from "react";

// Components
import Sidebar from "../components/Sidebar";
import TestScore from "../components/TestScore";
import QuestionSolved from "../components/QuestionSolved";
import TotalTest from "../components/TotalTest";
import TopicAnalysis from "../components/TopicAnalysis";
import Ranking from "../components/Ranking";

const Home = () => {
	return (
		<section className="w-full h-full min-h-screen flex">
			<Sidebar />
			<section className="MAIN_SECTION bg-gray-200 w-full h-full min-h-screen p-4 md:p-8 md:px-20 overflow-y-auto">
				<section className="TOP flex gap-6 items-stretch">
					<div className="rounded-2xl flex flex-col bg-white p-4 text-center min-w-fit">
						<p className="font-bold text-lg text-gray-600">Totol Questions</p>
						<p className="font-semibold text-7xl">105</p>
					</div>
					<div className="rounded-2xl flex flex-col bg-white p-4 h-full">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint error aut fugiat,
						reprehenderit quos aspernatur illo? Et tempore labore, accusamus iure officia id vitae dolorum
						velit doloremque enim quis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
						praesentium ut molestiae nesciunt veniam nobis. Ullam atque corrupti aspernatur unde inventore
						veritatis tempora dolor consequatur, quibusdam accusantium quo sequi aliquid?
					</div>
				</section>
				<section className="w-full flex">
					<section className="LEFT mt-8 w-[50%] flex flex-col gap-8">
						<TotalTest />
						<TestScore />

						<div className="rounded-2xl bg-white p-4 flex items-center w-4/5 justify-around">
							<TopicAnalysis />
						</div>
					</section>
					<section className="RIGHT mt-8 w-[50%] flex flex-col gap-8">
						<QuestionSolved />
						<Ranking />
					</section>
				</section>
			</section>
		</section>
	);
};

export default Home;
