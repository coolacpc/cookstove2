import { Typography } from "@material-tailwind/react";

export default function Footer() {
	return (
		<footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t py-6 text-center md:justify-between bg-white mx-auto">
			<Typography color="blue-gray" className="font-normal">
				&copy; 2023 Material Tailwind
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				<li>
					<Typography
						as="a"
						href="/cookstove2"
						color="blue-gray"
						className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
					>
						Home
					</Typography>
				</li>
				<li>
					<Typography
						as="a"
						href="/cookstove2/Clients"
						color="blue-gray"
						className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
					>
						Clients
					</Typography>
				</li>
			</ul>
		</footer>
	);
}
