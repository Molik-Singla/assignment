import React from "react";

// Components
import PrimaryText from "../components/PrimaryText";
import Divider from "../components/Divider";

// Utils
import chapter1Img from "./../assets/Images/chapter1.png";
import chapter2Img from "./../assets/Images/chapter2.png";
import chapter3Img from "./../assets/Images/chapter3.png";

const Ranking = () => {
	const rankData = [
		{
			title: "Chapter 1",
			img: chapter1Img,
			rank: 2892,
			minRank: 1982,
			status: "Very Good",
		},
		{
			title: "Chapter 2",
			img: chapter2Img,
			rank: 2395,
			minRank: 2395,
			status: "Good",
		},
		{
			title: "Chapter 3",
			img: chapter3Img,
			rank: 1233,
			minRank: 709,
			status: "Excellent",
		},
	];

	return (
		<div className="rounded-2xl bg-white p-4 flex flex-col gap-4 items-center w-4/5">
			<PrimaryText>Ranking</PrimaryText>

			{rankData.map((data, ind) => {
				return (
					<section className="SINGLE_RANK flex flex-col items-center gap-2">
						<Divider />
						<PrimaryText>{data?.title}</PrimaryText>
						<div key={99999 + ind} className="flex w-full justify-evenly items-center">
							<img className="w-2/5" src={data?.img} alt="RANK_Image" />
							<div className="flex flex-col items-center">
								<p className="font-bold text-4xl">{data?.rank}</p>
								<p className="font-semibold text-lg text-gray-700">(min : {data?.minRank})</p>
								<p className="mt-1 font-semibold">{data?.status}</p>
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default Ranking;
