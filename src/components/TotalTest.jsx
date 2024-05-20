import React from "react";

// Components
import PrimaryText from "./PrimaryText";

const TotalTest = ({ data = null, handleChangeChapter, currentChapter = 0 }) => {
	let totalTest = data.reduce((acc, curr) => acc + curr.totalTest, 0);

	return (
		<div className="rounded-2xl bg-white p-4 flex gap-6 items-center w-full justify-around md:p-8 max-w-lg">
			<div className="flex flex-col items-center">
				<PrimaryText size="l">Totol Test</PrimaryText>
				<p className="font-semibold text-7xl">{totalTest}</p>
			</div>

			<div className="flex flex-col gap-2">
				{data.map((currentChap, ind) => {
					return (
						<div
							key={currentChap?.id}
							className={`font-bold flex gap-6 p-1 px-4 rounded-md cursor-pointer ${
								currentChapter?.id === currentChap?.id && "bg-gray-200"
							}`}
							onClick={() => handleChangeChapter(currentChap?.id)}
						>
							<PrimaryText>{currentChap.chapter}</PrimaryText>
							<p>{currentChap?.totalTest}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TotalTest;
