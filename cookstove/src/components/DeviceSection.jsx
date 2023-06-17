import React from "react";
// import Box3 from "../assets/Box3.jpg";
import { CheckIcon } from "@heroicons/react/outline";
import Typed from "react-typed";

const DeviceSection = () => {
	return (
		<div className="bg-[#5296A9] w-full py-32 text-white">
			<div className="max-w-[1240px] mx-auto px-2">
				<h2 className="text-7xl font-bold text-center py-3">
					Why Choose
					<Typed
						className="text-[#00df9a] md:text-7xl sm:text-3xl text-1xl font-bold md:pl-5 pl-2"
						strings={["CookStove?"]}
						typeSpeed={250}
						backSpeed={60}
						loop
					/>
				</h2>
				<p className="text-2xl py-8 text-center py-8 text-[#00df9a]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Veritatis, ab. Officia sunt nulla aspernatur culpa, eaque
					tenetur excepturi nostrum tempore.
				</p>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
					<div className="flex">
						<div className="text-lg pt-2 pb-4 bg-gray-800">
							<CheckIcon className="w-7 mr-4 text-green-600" />
						</div>
						<div className="text-lg pt-2 pb-4 bg-gray-800 rounded">
							<h3 className="font-bold text-lg">Reason 1</h3>
							<p>
								{" "}
								{/* Updated: Added bg-gray-800 */}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores maxime deserunt
								voluptatibus consequatur similique voluptates!
							</p>
						</div>
					</div>
					<div className="flex">
						<div className="text-lg pt-2 pb-4 bg-gray-800">
							<CheckIcon className="w-7 mr-4 text-green-600" />
						</div>
						<div className="text-lg pt-2 pb-4 bg-gray-800 rounded">
							<h3 className="font-bold text-lg">Reason 2</h3>
							<p>
								{" "}
								{/* Updated: Added bg-gray-800 */}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores maxime deserunt
								voluptatibus consequatur similique voluptates!
							</p>
						</div>
					</div>
					<div className="flex">
						<div className="text-lg pt-2 pb-4 bg-gray-800">
							<CheckIcon className="w-7 mr-4 text-green-600" />
						</div>
						<div className="text-lg pt-2 pb-4 bg-gray-800 rounded">
							<h3 className="font-bold text-lg">Reason 3</h3>
							<p>
								{" "}
								{/* Updated: Added bg-gray-800 */}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores maxime deserunt
								voluptatibus consequatur similique voluptates!
							</p>
						</div>
					</div>
					<div className="flex">
						<div className="text-lg pt-2 pb-4 bg-gray-800">
							<CheckIcon className="w-7 mr-4 text-green-600" />
						</div>
						<div className="text-lg pt-2 pb-4 bg-gray-800 rounded">
							<h3 className="font-bold text-lg">Reason 4</h3>
							<p>
								{" "}
								{/* Updated: Added bg-gray-800 */}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Asperiores maxime deserunt
								voluptatibus consequatur similique voluptates!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeviceSection;
