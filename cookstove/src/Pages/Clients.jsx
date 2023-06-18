import React from "react";
import Footer from "../components/Footer";
import DeviceSection from "../components/DeviceSection";
import Clientphotos from "../components/Clientphotos";
import Order from "../components/Order";

function Clients() {
	return (
		<div>
			<DeviceSection />
			<Clientphotos />
			<Order />
			<Footer />
		</div>
	);
}

export default Clients;
