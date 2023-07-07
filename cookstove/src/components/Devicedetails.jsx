import Box11 from "../assets/Box11.jpg";
import {
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";
import { Element } from "react-scroll";

export default function Devicedetails() {
	return (
		<Element name="Devicedetails">
			<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<svg
						className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="e813992c-7d03-4cc4-a2bd-151760b470a0"
								width={200}
								height={200}
								x="50%"
								y={-1}
								patternUnits="userSpaceOnUse"
							>
								<path d="M100 200V.5M.5 .5H200" fill="none" />
							</pattern>
						</defs>
						<svg
							x="50%"
							y={-1}
							className="overflow-visible fill-gray-50"
						>
							<path
								d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect
							width="100%"
							height="100%"
							strokeWidth={0}
							fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
						/>
					</svg>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<p className="text-base font-semibold leading-7 text-indigo-600">
									Monitor
								</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									A cost-effective and safer monitoring
									solution…
								</h1>
								<p className="mt-6 text-xl leading-8 text-gray-700">
									SDW generates insights based on real-use
									data from the IoT sensors for the benefit of
									distribution and installation projects,
									carbon aggregators, and clean fuel
									suppliers. By making the impacts of deployed
									interventions visible to the stakeholders in
									a reasonable time, clean cooking
									interventions can gain traction while
									boosting innovation to overcome adoption
									challenges.
								</p>
							</div>
						</div>
					</div>
					<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img
							className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
							src={Box11}
							alt=""
						/>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
								<p>
									The device records stove usage data
									automatically, taking into account
									temperature and fuel consumption. This data
									is then uploaded to a web platform for
									analysis and presentation. The data is
									interpreted and transformed into
									user-friendly charts and reports on the
									platform. By measuring various parameters,
									we are able to calculate stove efficiency,
									enabling users to monitor and report impacts
									of their projects.
								</p>
								<ul
									role="list"
									className="mt-8 space-y-8 text-gray-600"
								>
									<li className="flex gap-x-3">
										<CloudArrowUpIcon
											className="mt-1 h-5 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Modern and Clean
											</strong>{" "}
											cooking solutions have not scaled
											significantly due to limited
											measurement and visibility of
											impacts.
										</span>
									</li>
									<li className="flex gap-x-3">
										<LockClosedIcon
											className="mt-1 h-5 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Stove Data Works
											</strong>{" "}
											is an{" "}
											<b>Internet of Things (IoT)</b>{" "}
											-based solution that provides remote
											monitoring of stove usage. The
											solution includes a hardware
											component and a web-based platform
											providing data visualization for
											various use cases.
										</span>
									</li>
									<li className="flex gap-x-3">
										<ServerIcon
											className="mt-1 h-5 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												SDW empowers clean cooking
												communities
											</strong>{" "}
											by providing visibility of stove use
											to benefit stove distribution and
											installation projects, carbon
											aggregators, and clean fuel
											suppliers.
										</span>
									</li>
								</ul>
								<p className="mt-8">
									SDW aggregates data from multiple stoves
									from a single supplier or within a project
									with various suppliers.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
									Use cases:
								</h2>
								<p className="mt-6">
									<h3>
										&#x2022; <b>Cookstove companies:</b> The
										SDW devices are tailored to give
										visibility to clean-cooking stove
										companies’ work in distributing and
										installing clean cooking devices. By
										showcasing their progress in
										installations, these companies can
										leverage the analytics provided by SDW
										to attract investments and make informed
										business decisions. The comprehensive
										data and insights obtained through SDW
										empower clean-cooking stove companies to
										demonstrate their impact, enhance their
										credibility, and strategically drive
										their operations towards growth and
										success.
									</h3>
									<h3>
										&#x2022;{" "}
										<b>Carbon project developers:</b> We
										have built the SDW devices with carbon
										developers in mind. We are here to
										support monitoring clean cooking carbon
										offsets through affordable and more
										readily available performance and impact
										data.
									</h3>
									<h3>
										&#x2022; <b>Financing Agencies:</b> Our
										solution goes beyond stove usage
										monitoring. It allows financing agencies
										to enhance their due diligence processes
										and make more informed investment
										decisions. A clear track record is
										established by analyzing the performance
										of stoves deployed by potential
										investees.
									</h3>
									<h3>
										&#x2022; <b>Governments:</b> SDW
										services will inform policy direction
										and advocacy for public financing and
										incentives for clean cooking in target
										markets.
									</h3>
									<h3>
										&#x2022; <b>Development partners:</b> We
										are positioned to become the go-to data
										source or trends, performance and impact
										of clean cooking interventions hence
										informing new development aid assistance
										to those that are delivering quality and
										consistency.
									</h3>
									<h3>
										&#x2022; <b>End-users:</b> Ultimately,
										our aim is to empower end users to make
										more informed decisions when it comes to
										selecting suppliers for their purchasing
										needs. With our solution, end users gain
										the ability to visualize their stove
										usage by accessing our user-friendly SDW
										platform. By providing this valuable
										tool, we empower individuals to optimize
										their choices and make confident,
										well-informed purchasing decisions.
									</h3>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}
