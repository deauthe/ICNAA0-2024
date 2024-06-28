"use client";
import { useState } from "react";
import { navMenuData } from "./staticData";

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./../ui/sheet";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";

const MenuMobile = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet onOpenChange={(e) => setIsOpen(e)}>
			<SheetTrigger asChild>
				{isOpen ? (
					<VscChromeClose
						className="text-[16px] text-primary-content"
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<BiMenuAltRight
						className="text-[20px] text-primary-content"
						onClick={() => setIsOpen(!isOpen)}
					/>
				)}
			</SheetTrigger>
			<SheetContent className="bg-primary text-primary-content border-none rounded-l-lg ">
				<SheetHeader>
					<SheetTitle className="text-white font-extrabold text-3xl">
						ICNAAO
					</SheetTitle>
				</SheetHeader>
				{/* daisy ui magic for nested list  */}
				<ul className="menu bg-transparent w-full rounded-box active:glass prose-md uppercase text-md ">
					{navMenuData.map((item, index) => {
						return (
							<li key={index}>
								<details>
									<summary>{item.name}</summary>
									<ul>
										{item?.subMenu?.map((sublink, index) => {
											return (
												<li key={index}>
													<a href={sublink.url}>{sublink.name}</a>
												</li>
											);
										})}
									</ul>
								</details>
							</li>
						);
					})}
				</ul>
				{/* end of nested lists  */}
				<SheetFooter>
					<aside>
						<p className="text-muted-foreground">
							Copyright © 2024 - All right reserved by NITH
						</p>
					</aside>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default MenuMobile;
