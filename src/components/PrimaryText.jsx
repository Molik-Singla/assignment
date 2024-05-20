import React from "react";

const PrimaryText = ({ children, size = "m" }) => {
	const textSize = {
		s: "text-sm",
		m: "text-base",
		l: "text-lg",
		xl: "text-xl",
	};
	return <p className={`text-gray-500 font-bold ${textSize[size]}`}>{children}</p>;
};

export default PrimaryText;
