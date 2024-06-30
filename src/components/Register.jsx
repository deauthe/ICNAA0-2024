import regFee from "../assets/regFee.png";
export default function Register() {
	return (
		<div
			id="register"
			className={
				"py-16 mx-auto items-center flex w-full  flex-col  gap-0 bg-transparent relative overflow-hidden h-full p-4"
			}
		>
			<div className="bg-primary absolute w-full h-full  top-0  z-10 "></div>
			<div className=" text-primary-content w-full z-30 prose-p:text-primary-content/80 prose-a:text-secondary">
				<div className=" w-full  mx-auto  ">
					<div className="section my-5">
						<h1 className="text-5xl text-center uppercase font-bold ">
							{"Registration     Instructions"}
						</h1>
					</div>
					<div className="grid grid-flow-row-dense md:grid-cols-2 grid-cols-1 gap-3">
						<div className="section card card-body bg-base-200/20">
							<h2 className="card-title ">Categories of Registration</h2>
							<p>
								There are two categories of registration:{" "}
								<strong>Contributor</strong> or <strong>Attendee</strong>.
							</p>
							<p>
								An attendee can register any time before the last date of
								registration. However, a contributor needs to wait until their
								abstract is accepted. After the notification of such acceptance
								by email, they can pay the fee and register. If a contributor
								pays the fee before acceptance of the abstract and the abstract
								is not accepted later, the paid fee shall not be refunded.
							</p>
						</div>

						<div className="section card card-body bg-base-200/20">
							<h2 className="card-title">Registration Fees</h2>
							<p>
								Registration fees are to be paid using SBI Collect. You may use
								the following link:
								<a
									href="https://www.onlinesbi.sbi/sbicollect/"
									target="_blank"
									rel="noopener noreferrer"
								>
									https://www.onlinesbi.sbi/sbicollect/
								</a>
							</p>
							<p>
								Please enter your paper ID in the remarks column while making
								the payment. If you are an attendee, then mention the same in
								the remarks.
							</p>
							<p>
								After payment, please fill out the{" "}
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc9qyV_qbObJ4Tm1wd4uNwUexZklP0ZmcTVdMEGr5i0HXAsRw/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									REGISTRATION FORM
								</a>{" "}
								with your details to complete the registration process.
							</p>
							<p>
								For student registrations, please upload valid proof and SBI
								Collect receipt together as a single PDF in the Google Form.
							</p>
						</div>

						<div className="section card card-body bg-base-200/20">
							<h2 className="card-title">Authors from Outside India</h2>
							<p>
								Authors from outside India may use the following details for
								registration:
							</p>
							<ul>
								<li>Bank Name: State Bank of India</li>
								<li>Account Number: 11159548375</li>
								<li>Name in the Account: Director NIT Hamirpur</li>
								<li>IFSC: SBIN0010367</li>
								<li>MICR Code: 177 002 003</li>
								<li>SWIFT Code: SBININBB277</li>
							</ul>
						</div>

						<div className="section card card-body bg-base-200/20">
							<h2 className="card-title">Abstract Submission</h2>
							<p>
								The abstract paper should be at most 2 pages, including figures
								and references. The authors are encouraged to prepare their
								abstract submissions both in Word/Latex and PDF. The abstract
								format is available at
								<a
									href="https://drive.google.com/file/d/1zFh8v5MYx8Y8QDS7JCFGXgdrmfQCZWwB/view"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Abstract Format
								</a>
								. The latex format is available at
								<a
									href="https://drive.google.com/file/d/1GgHIzbMHeCnVxqEtds9f_YC5XaGbltlJ/viewt"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									Latex Format
								</a>
								. In case you face any difficulty downloading the format, write
								to us at
								<a href="mailto:icnaao2024@gmail.com">
									icnaao2024@gmail.com
								</a>{" "}
								or
								<a href="mailto:icnaao2024@nith.ac.in">icnaao2024@nith.ac.in</a>
								.
							</p>
							<p>
								To submit your abstract, please use the{" "}
								<a
									href="https://docs.google.com/forms/d/1-ewgVMFYR2D66eW9VNcpy07n4UwP04TXCDjmc4XDhHs/edit"
									target="_blank"
									rel="noopener noreferrer"
								>
									SUBMISSION FORM
								</a>
								.
							</p>
						</div>

						<div className="section card card-body bg-base-200/20">
							<h2 className="card-title">Participation in ICNAAO 2024</h2>
							<p>
								To participate during the ICNAAO 2024, please{" "}
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSc9qyV_qbObJ4Tm1wd4uNwUexZklP0ZmcTVdMEGr5i0HXAsRw/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									REGISTER HERE
								</a>
								.
							</p>
						</div>
						<div className="p-0 card ">
							<figure>
								<img src={regFee} alt="" />
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
