import { MailCheckIcon, PhoneCallIcon } from "lucide-react";
import { navMenuData } from "./Navbar/staticData";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div
			id="footer"
			className="flex flex-col items-center bg-primary text-primary-content"
		>
			<hr className="  h-[1px] mx-auto w-full" />

			<footer className="footer lg:grid-cols-3 lg:gap-10  p-10">
				<nav className="flex flex-col gap-5  w-fit">
					<h6 className="footer-title">Contact Us</h6>
					<div className="flex flex-col gap-2 text-wrap ">
						<p className="flex gap-2">
							Department of Mathematics & Scientific Computing National
							Institute of Technology Hamirpur - (H.P.) India-177005
						</p>
						<p className="flex gap-2 items-center">
							<PhoneCallIcon size={12} />
							<a href="tel:01972-254108">01972-254108</a> |{" "}
							<a href="tel:+91-9882487678">+91-9882487678</a>
						</p>
						<p className="flex gap-2 items-center  ">
							<MailCheckIcon size={12} />
							<a href="mailto:icnaao2024@nith.ac.in">icnaao2024@nith.ac.in</a> |
							<a href="mailto:icnaao2024@gmail.com">icnaao2024@gmail.com</a>
						</p>
					</div>
				</nav>

				<nav>
					<h6 className="footer-title">Navigation</h6>
                    <div className="grid grid-cols-2 gap-2">
					{navMenuData.map((item) => {
						return (
							<Link key={item.name} className="link link-hover" href={item.url}>
								{item.name}
							</Link>
						);
					})}
                    </div>
				</nav>

				<nav>
					<h6 className="footer-title">Social</h6>
					<div className="grid grid-flow-col gap-4 items-center">
						<a
							className="link link-secondary"
							href="https://chat.whatsapp.com/BgZBG41bKIL6nUR6H7GgRm"
						>
							<FaWhatsapp size={26} />
						</a>
						<a
							className="link link-secondary"
							href="https://www.youtube.com/channel/UCWuK-g6soF7fM8t-sAvFoNw"
						>
							<FaYoutube size={26} />
						</a>
						<a
							className="link link-secondary"
							href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FIcnaao2024%2F61561891762997%2F&sa=D&sntz=1&usg=AOvVaw1iwVHOroY7w3OyEfPTK5xz"
						>
							<FaFacebook size={26} />
						</a>
					</div>
				</nav>
			</footer>
			<hr className="opacity-40  h-[1px] mx-auto w-5/6" />
			<aside className="text-neutral-content my-2">
				<p>
					&copy; {new Date().getFullYear()} - All right reserved by DoMSC, NIT Hamirpur.
				</p>
			</aside>
		</div>
	);
}
