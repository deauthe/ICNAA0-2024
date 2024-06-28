const Navbar = () => {
	return (
		<div className="navbar bg-primary py-0 text-primary-content">
			<div className="navbar-start ">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-primary text-primary-content"
					>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#department">DoMSC</a>
						</li>
						<li>
							<a href="#register">Register</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				<a className="w-full h-full " href="/">
					<img src="/logo.png" alt="logo-nav" className="" />
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#department">DoMSC</a>
					</li>
					<li>
						<a href="#register">Register</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
};

export default Navbar;
