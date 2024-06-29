// eslint-disable-next-line react/prop-types
export default function Container({ children, id = "", className }) {
	return (
		<div
			id={id}
			className={
				`w-full lg:px-6 md:px-5 px-3 py-3 text-justify flex flex-col gap-5` +
				className
			}
		>
			{children}
		</div>
	);
}
