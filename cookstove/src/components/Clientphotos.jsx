import React from "react";
import Box3 from "../assets/Box3.jpg";
import Box11 from "../assets/Box11.jpg";
import Box12 from "../assets/Box12.jpg";
import Box30 from "../assets/Box30.jpg";

function Clientphotos() {
	return (
		<div className="bg-white mx-auto py-16 px-32 text-center">
			<h1 className="text-4xl font-bold text-4xl font-bold text-xl sm:text-4xl">
				UN
			</h1>
			<p className="py-4">All photos</p>
			<div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
				<img
					className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
					src={Box3}
					alt="/"
				/>
				<img
					className="w-full h-full object-cover"
					src={Box11}
					alt="/"
				/>
				<img
					className="w-full h-full object-cover"
					src={Box12}
					alt="/"
				/>
				<img
					className="w-full h-full object-cover"
					src={Box30}
					alt="/"
				/>
			</div>
		</div>
	);
}

export default Clientphotos;
