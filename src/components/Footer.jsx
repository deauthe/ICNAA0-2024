export default function Footer() {
	return (
		<div className="flex flex-col items-center bg-primary text-primary-content">
			<hr className="  h-[1px] mx-auto w-full" />

			<footer className="footer  p-10">
				<nav className="flex flex-col gap-5">
					<h6 className="footer-title">Contact Us</h6>
					<div className="flex flex-col gap-2 w-1/2 text-wrap">
						<p>
							Department of Mathematics & Scientific Computing National
							Institute of Technology Hamirpur - (H.P.) India-177005
						</p>
						<p>
							Phone: <a href="tel:01972-254108">01972-254108</a> |{" "}
							<a href="tel:+91-9882487678">+91-9882487678</a>
						</p>
						<p>
							E-mail:{" "}
							<a href="mailto:icnaao2024@nith.ac.in">icnaao2024@nith.ac.in</a>
							<a href="mailto:icnaao2024@gmail.com">icnaao2024@gmail.com</a>
						</p>
					</div>
				</nav>

				<form>
					<h6 className="footer-title">Newsletter</h6>
					<fieldset className="form-control w-80 text-primary-content">
						<label className="label">
							<span className="label-text text-primary-content/40">
								Enter your email address
							</span>
						</label>
						<div className="join">
							<input
								type="text"
								placeholder="username@site.com"
								className="input input-bordered join-item"
							/>
							<button className="btn btn-secondary join-item">Subscribe</button>
						</div>
					</fieldset>
				</form>
			</footer>
			<hr className="opacity-40  h-[1px] mx-auto w-5/6" />
			<aside className="text-neutral-content my-2">
				<p>
					Copyright © ${new Date().getFullYear()} - All right reserved by ACME
					Industries Ltd
				</p>
			</aside>
		</div>
	);
}
