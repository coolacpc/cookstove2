import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeviceSection from "../components/DeviceSection";
import Clientphotos from "../components/Clientphotos";
import Order from "../components/Order";

function Clients() {
	return (
		<div>
			<Navbar />
			<DeviceSection />
			<Clientphotos />
			<Order />
			<Footer />
		</div>
	);
}

export default Clients;
