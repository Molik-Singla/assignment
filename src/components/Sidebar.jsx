import React from "react";

// Components
import Flag from "./../assets/Images/india_flag.png";

// Utils
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";

const Sidebar = () => {
	return (
		<section className="SIDEBAR w-80 h-full min-h-screen bg-white rounded-r-3xl p-4 flex flex-col md:pr-8 min-w-fit sticky top-0">
			<section className="flex gap-3 items-center">
				<div className="w-20 h-20 rounded-full bg-yellow-400">
					<img
						className="w-full h-full rounded-full"
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-1">
					<p className="font-bold text-xl">Siddharth Singh</p>
					<p className="font-semibold text-sm text-gray-500">
						<span>Last Updated : </span>
						<span>18 May 2024</span>
					</p>
				</div>
			</section>
			<section className="flex flex-col gap-1 mt-7">
				<div className="flex items-center gap-2">
					<div>
						<img className="w-5" src={Flag} alt="INDIA FLAG" />
					</div>
					<p>India</p>
				</div>
				<div className="flex items-center gap-2">
					<div>
						<HiOutlineAcademicCap className="text-xl" />
					</div>
					<p>Delhi Technologies University</p>
				</div>
				<div className="flex items-center gap-2">
					<div>
						<AiOutlineMail className="text-lg" />
					</div>
					<p>abcd@gmail.com</p>
				</div>
				<p></p>
			</section>

			<div className="w-full h-1 bg-gray-100 my-2"></div>

			<section className="flex flex-col gap-1 mt-4">
				<div className="w-[94%] px-4 py-2 font-bold text-gray-600 rounded-md bg-gray-100">
					<p>Overall Stats</p>
				</div>
				<div className="w-full h-1 bg-gray-100 my-1"></div>
				<div className="w-[94%] px-4 py-2 font-bold text-gray-600 rounded-md hover:bg-gray-100">
					<p>Chapter wise stats</p>
				</div>
			</section>
		</section>
	);
};

export default Sidebar;
