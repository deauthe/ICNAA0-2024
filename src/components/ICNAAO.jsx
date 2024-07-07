import logo from "../assets/logo.png";
import Dates from "./Dates";
export default function ICNAAO() {
	return (
		<div className="lg:grid grid-cols-2 gap-3 flex flex-col justify-center">
			<div className="flex flex-col md:flex-row gap-3 justify-between bg-primary rounded-3xl md:pr-2 transition-all duration-150 hover:scale-101">
				<div className="card bg-primary text-primary-content w-full ">
					<div className="card-body ">
						<div className="inline-flex flex-wrap-reverse gap-2 md:justify-between">
							<h2 className="card-title">ICNAAO 2024</h2>
							<img
								src={logo}
								alt="logo"
								className="rounded-lg h-fit my-auto w-fit"
							/>
						</div>
						<p>
							The ICNAAO is in its 4th edition this year. The objective of the
							conference is to motivate and equip the participants with the
							recent state-of-art nonlinear analysis, fixed point theory,
							dynamical systems, optimization, fractals, applications to
							differential/integral equations and signal & image processing,
							soft computing as well as to expose the young talents with the
							newer dimensions in these areas with their practical approaches to
							tackle the real life problems in engineering, medical and social
							sciences & the Ramanujan&apos;s Conjectures so that the
							participants can take up various challenges in future.
						</p>
						<div>
							<h3 className="text-lg font-semibold my-2 ">
								Previous ICNAAO Events
							</h3>
							<ul className="grid gap-2">
								<li>
									<a
										className="underline"
										href="https://conferences.iitbhu.ac.in/ICNAAO2021/"
									>
										ICNAA0-2021
									</a>{" "}
									at IIT BHU, Varanasi, UP, India.
								</li>
								<li>
									<a
										className="underline"
										href="https://conferences.iitbhu.ac.in/ICNAAO2022/"
									>
										ICNAA0-2022
									</a>{" "}
									at IIT BHU, Varanasi, UP, India.
								</li>
								<li>
									<a
										className="underline"
										href="https://nitdgp.ac.in/ICNAAO_2023/ap.html"
									>
										ICNAAO 2023
									</a>{" "}
									at NIT Durgapur, Varanasi, UP, India.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="card p-2 bg-base-200 shadow-lg hover:bg-base-100 transition-all duration-150 hover:scale-101">
					<div className="card-body">
						<h2 className="card-title font-extrabold">
							Latest News
							<div className="badge badge-secondary">NEW</div>
						</h2>
						<ul className="list-disc list-inside">
							<li>Abstract Submission is now open.</li>
							<li>
								Registration for attendance only is possible until September 30,
								2024.
							</li>
						</ul>
					</div>
				</div>
				<Dates />
			</div>
		</div>
	);
}
