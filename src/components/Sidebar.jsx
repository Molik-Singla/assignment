import React, { useState } from "react";

// Components
import Flag from "./../assets/Images/india_flag.png";

// Utils
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 1024 ? true : false);

	const personData = {
		name: "Siddharth Singh",
		lastUpdated: "18 May 2024",
		country: "India",
		university: "Delhi Technologies University",
		email: "abcd@gmail.com",
	};

	return (
		<section className="relative z-[99]">
			<button
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className="w-14 h-14 lg:hidden rounded-full bg-white shadow-lg flex justify-center items-center fixed top-2 left-2"
			>
				<RiMenu2Fill className="text-xl" />
			</button>
			<section
				className={`SIDEBAR w-80 h-full min-h-screen bg-white rounded-r-3xl p-4 flex flex-col lg:pr-8 min-w-fit fixed lg:sticky top-0 ${
					isMenuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<button onClick={() => setIsMenuOpen(false)} className="flex justify-end h-10 py-2 pt-0 lg:hidden">
					<RxCross2 className="text-2xl" />
				</button>
				<section className="flex gap-3 items-center">
					<div className="w-20 h-20 rounded-full">
						<img
							className="w-full h-full rounded-full"
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
							alt=""
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="font-bold text-xl">{personData?.name}</p>
						<p className="font-semibold text-sm text-gray-500">
							<span>Last Updated : </span>
							<span>{personData?.lastUpdated}</span>
						</p>
					</div>
				</section>
				<section className="flex flex-col gap-1 mt-7">
					<div className="flex items-center gap-2">
						<div>
							<img className="w-5" src={Flag} alt="INDIA FLAG" />
						</div>
						<p>{personData?.country}</p>
					</div>
					<div className="flex items-center gap-2">
						<div>
							<HiOutlineAcademicCap className="text-xl" />
						</div>
						<p>{personData?.university}</p>
					</div>
					<div className="flex items-center gap-2">
						<div>
							<AiOutlineMail className="text-lg" />
						</div>
						<p>{personData?.email}</p>
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
		</section>
	);
};

export default Sidebar;
