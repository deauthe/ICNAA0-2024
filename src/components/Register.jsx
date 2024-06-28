export default function Register() {
	return (
		<div
			className={
				"py-16 mx-auto items-center flex w-full  flex-col  gap-0 bg-transparent relative overflow-hidden h-full p-4"
			}
		>
			<div className="bg-primary absolute w-full h-full rounded-b-badge top-0 md:rounded-b-[20%] z-10 "></div>
			<div className="card text-primary-content w-full z-30">
				<div className="card-body text-center">
          <h2 className="card-title mx-auto text-center mb-3 text-3xl">
            Register
          </h2>
          <div className="text-justify grid gap-2">
					<p>
						There are two categories of registration: Contributor or Attendee.
						An attendee can register any time before last date of registration.
						However, a contributor need to wait untill her/his abstract is
						accepted. After the notification of such acceptance by email, they
						can pay fee and register. If a contributor pays fee before
						acceptance of abstract and the abstract is not accepted later, the
						paid fee shall not be refunded.
					</p>
					<p>
						Please enter your paper ID in remarks column while making the
						payment. If you are attendee then mention the same in remarks. After
						payment, please fill out the REGISTRATION FORM with your details to
						complete the registration process. For student registrations, please
						upload valid proof and SBI Collect receipt together as a single PDF
						in the Google Form Authors from outside India may use the following
						details for registration:Bank Name: State Bank of India Account
						Number: 11159548375 Name in the Account: Director NIT Hamirpur IFSC:
						SBIN0010367 MICR Code: 177 002 003 SWIFT Code: SBININBB277 The
						abstract paper should be at most 2 pages including figures and
						references. The authors are encouraged to prepare their abstract
						submissions both in Word/Latex and pdf. The abstract format is
						available at Abstract Format. The latex format is available at Latex
						Format. In case you face any difficulty downloading the format,
						write to us at{" "}
						<a
							className="underline text-blue-600 font-semibold"
							href="mailto:icnaao2024@gmail.com"
						>
							icnaao2024@gmail.com
						</a>{" "}
						or{" "}
						<a
							className="underline text-blue-600 font-semibold"
							href="mailto:icnaao2024@nith.ac.in"
						>
							icnaao2024@nith.ac.in
						</a>{" "}
						.
					</p>
          </div>
				</div>
			</div>
		</div>
	);
}
