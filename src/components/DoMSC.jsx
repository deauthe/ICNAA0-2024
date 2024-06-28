export default function DoMSC() {
	return (
		<>
			<div className="h-screen lg:px-16 md:px-12 px-5 items-center justify-center flex flex-col py-3">
				<div className="card w-full shadow-xl h-full bg-accent text-primary-content">
					<figure>
						<img src="/banner1.jpg" alt="Shoes" />
					</figure>
					<div className="card-body ">
						<h2 className="card-title">
							Department of Mathematics & Scientific Computing
							<div className="badge badge-secondary">NEW</div>
						</h2>
						<p>
							{" "}
							The department of Mathematics & Scientific Computing came into
							existence in August-2009. Previously, this department was a part
							of the formerly department of Applied Sciences & Humanities, which
							came into existence in 1986. Presently this department has 12
							regular faculty members from diverse areas of specialization in
							Mathematics, Statistics, Operational Research, Image Processing
							and Cryptography & Network Security.
						</p>
						<p>
							We have developed quality infrastructure to fulfil the needs of
							various science and engineering mainstreams. The Department has a
							vibrant research atmosphere backed up by good infrastructural
							facilities.
						</p>
						<p>
							The department offers B.Tech four-year program in Mathematics and
							Computing since 2020, M.Sc. in Mathematics & Scientific Computing
							and Ph.D. in various specializations of Mathematics, Statistics &
							Cryptography.
						</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline">
								Mathematics and Computing
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
