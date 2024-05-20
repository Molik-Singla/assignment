import React from "react";
import PrimaryText from "./PrimaryText";

const TotalTest = () => {
	return (
		<div className="rounded-2xl bg-white p-4 flex gap-6 items-center w-4/5 justify-around md:p-8">
			<div>
				<PrimaryText>Totol Test</PrimaryText>
				<p className="font-semibold text-7xl">86</p>
			</div>

			<div className="flex flex-col gap-2">
				<div className="font-bold flex gap-6">
					<PrimaryText>Chapter 1</PrimaryText>
					<p>26</p>
				</div>
				<div className="font-bold flex gap-6">
					<PrimaryText>Chapter 2</PrimaryText>
					<p>24</p>
				</div>
				<div className="font-bold flex gap-6">
					<PrimaryText>Chapter 3</PrimaryText>
					<p>36</p>
				</div>
			</div>
		</div>
	);
};

export default TotalTest;
