import { useState, useEffect } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
	const [show, setShow] = useState(false);

	const controlNavbar = () => {
		if (window.scrollY >= 40) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, []);

	return (
		<div
			className={` w-full h-[50px] items-center md:h-[80px]  z-50 fixed  top-0 transition-all duration-500  ${
				show ? "px-1" : ""
			} `}
		>
			{/* <div
    className={`bg-red-w-full flex justify-between`}
  > */}
			<div
				className={` relative ${
					show
						? "bg-primary mt-2 text-primary-content rounded-full"
						: "bg-primary text-primary-content "
				} items-center w-full flex justify-between transition-all duration-500 md:px-5 px-2 py-1`}
			>
				<div className="flex gap-2 items-center ml-5">
					<a href="/">
						<div className=" flex items-end gap-2 ">
							<img src="/logo.png" alt="logo" className="" />
						</div>
					</a>
				</div>

				{/* menu start  */}

				<div
					className={`min-h-full px-3 rounded-full absolute mx-auto left-0 right-0 w-fit my-auto  flex-row  gap-2 items-center hidden lg:flex py-2  ${
						show ? " text-primary-content" : "text-primary-content"
					} `}
				>
					<Menu />
				</div>

				<div className="  flex items-center gap-2   ">
					{/* mobile menu  */}
					<div className="lg:hidden block px-2">
						<MenuMobile />
					</div>
					{/* Mobile menu end */}
				</div>

				{/* <ToastContainer /> */}
			</div>
		</div>
	);
};

export default Navbar;
