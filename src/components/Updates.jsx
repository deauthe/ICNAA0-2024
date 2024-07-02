const links = [
	{
		title: "accepted papers",
		url: "/",
	},
	{
		title: "accepted abstracts",
		url: "/",
	},
];
export default function Updates() {
	return (
		<div
			id="updates"
			className={
				" mx-auto items-center flex w-full  flex-col  gap-0 bg-transparent relative overflow-hidden h-full p-4"
			}
		>
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-lg font-bold uppercase">
				accepted papers and abstracts
			</div>

			<div className="grid gap-2 md:gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 w-full items-center ">
				{links.map((item) => {
					return (
						<div key={item.name}>
							<LinkCard {...item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

const LinkCard = ({ title, url }) => {
	return (
		<a
			href={url}
			className="card card-compact bg-primary shadow-lg h-96 w-full items-center hover:bg-primary/70 hover:shadow-2xl transition-all duration-200 hover:scale-105"
		>
			<div className="w-full h-full items-center justify-center flex text-3xl md:text-4xl lg:text-6xl uppercase text-wrap font-extrabold text-primary-content text-center">
				<h2 className="text">{title}</h2>
			</div>
		</a>
	);
};
