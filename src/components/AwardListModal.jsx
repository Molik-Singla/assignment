import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PrimaryText from "./PrimaryText";

// Utils
import { RxCross2 } from "react-icons/rx";
import award1Img from "./../assets/Images/award1.png";
import award2Img from "./../assets/Images/award2.png";
import award3Img from "./../assets/Images/award3.png";
import award4Img from "./../assets/Images/award4.png";

const AwardListModal = ({ isModalOpen, handleCloseModal }) => {
	useEffect(() => {
		if (isModalOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "scroll";
	}, [isModalOpen]);

	if (!isModalOpen) return null;
	return ReactDOM.createPortal(
		<section className="w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,0.7)] fixed top-0">
			<section className="flex flex-col gap-4 p-4 lg:p-6 rounded-3xl bg-white h-auto w-[94%] max-w-[460px] lg:w-[460px]">
				<div className="flex justify-between items-center">
					<PrimaryText size="s">Award List</PrimaryText>
					<button onClick={handleCloseModal}>
						<RxCross2 className="text-xl" />
					</button>
				</div>

				<section className="flex flex-wrap flex-row  gap-y-6">
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award1Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award2Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award3Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award4Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award1Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award2Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award3Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
					<div className="flex flex-col gap-1 items-center justify-between w-1/4">
						<img className="max-w-[80px]" src={award4Img} alt="AWARDS_IMGES" />
						<PrimaryText size="s">2022-10-22</PrimaryText>
					</div>
				</section>
			</section>
		</section>,
		document.getElementById("modal")
	);
};

export default AwardListModal;
