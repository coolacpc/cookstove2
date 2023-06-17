import React from "react";
import PlanCard from "./PlanCard";

function Order() {
	return (
		<div className="flex flex-col items-center bg-[#5296A9] p-4">
			<div className="mb-2 mt-12 text-center">
				<h1 className="mb-4 text-7xl font-white text-white">Order</h1>
				<p className="text-lg text-white">das</p>
			</div>
			<div className="flex flex-col xl:flex-row"></div>
			<PlanCard
				color="white"
				name="SDW-AlphaOne"
				description="Kickstart your cooking jourrney"
				features={[
					"1 User",
					"Basic Support",
					"custom feature 1",
					"custom feature 2 ",
				]}
				btnText="Get Started"
			/>
		</div>
	);
}

export default Order;
