import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "../../lib/utils";
import { navMenuData } from "./staticData";

const Menu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex flex-row gap-3 ">
				{navMenuData.map((item, index) => {
					return (
						<div key={index} className="dropdown dropdown-hover ">
							<div className="uppercase font-light bg-transparent mx-1  hover:cursor-pointer hover:scale-105 hover:text-white transition-all duration-200">
								{item.name}
							</div>
							{item.subMenu && (
								<ul
									tabIndex={0}
									className="dropdown-content z-[1] menu card-bordered p-2 shadow bg-primary/90  uppercase rounded-box w-52 "
								>
									{item.subMenu.map((item) => {
										return (
											<ListItem
												key={item.name}
												title={item.name}
												href={item.url || "/"}
											></ListItem>
										);
									})}
								</ul>
							)}
						</div>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

// eslint-disable-next-line react/prop-types
const ListItem = ({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none bordered space-y-1 rounded-md items-center leading-none no-underline outline-none transition-colors hover:glass hover:text-accent-foreground focus:bg-primary focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
};
ListItem.displayName = "ListItem";

export default Menu;
