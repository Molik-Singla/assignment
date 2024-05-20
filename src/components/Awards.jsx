import React, { useState } from "react";

// Components
import PrimaryText from "./PrimaryText";

// Utils
import award1Img from "./../assets/Images/award1.png";
import award2Img from "./../assets/Images/award2.png";
import award3Img from "./../assets/Images/award3.png";
import award4Img from "./../assets/Images/award4.png";
import AwardListModal from "./AwardListModal";

const Awards = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<div className="rounded-2xl bg-white p-4 flex flex-col w-full max-w-lg gap-4 lg:p-8">
			<PrimaryText>AWARDS</PrimaryText>
			<div className="flex gap-3 justify-between">
				<img className="w-1/5" src={award1Img} alt="AWARDS_IMGES" />
				<img className="w-1/5" src={award2Img} alt="AWARDS_IMGES" />
				<img className="w-1/5" src={award3Img} alt="AWARDS_IMGES" />
				<img className="w-1/5" src={award4Img} alt="AWARDS_IMGES" />
			</div>
			<button className="text-center" onClick={handleOpenModal}>
				<PrimaryText>show more</PrimaryText>
			</button>

			<AwardListModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
		</div>
	);
};

export default Awards;
