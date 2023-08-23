import React from "react";
import StepperWithContent from "./Stepper";

function Preordermodal({ closeModal }) {
	const handleOnClose = (e) => {
		if (e.target.id === "container") closeModal();
	};
	return (
		<div
			id="container"
			onClick={handleOnClose}
			className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10"
		>
			<div className=" p-2 rounded-lg max-w-screen-lg w-full h-fit">
				<StepperWithContent />
			</div>
		</div>
	);
}

export default Preordermodal;
