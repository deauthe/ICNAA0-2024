// eslint-disable-next-line react/prop-types
export default function Container({ children, id = "", className }) {
	return (
		<div
			id={id}
			className={`w-full lg:px-20 md:px-16 px-5 py-3 text-justify` + className}
		>
			{children}
		</div>
	);
}
