import React from "react";

// Components
import PrimaryText from "./PrimaryText";

const TotalQuestions = () => {
	const totalQuestions = 156;

	return (
		<div className="rounded-2xl flex flex-col bg-white p-4 text-center min-w-fit justify-center md:px-8">
			<PrimaryText size="l">Total Questions</PrimaryText>
			<p className="font-semibold text-7xl">{totalQuestions}</p>
		</div>
	);
};

export default TotalQuestions;
