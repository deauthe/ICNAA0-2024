// eslint-disable-next-line react/prop-types
export default function Container({ children, id = "", className }) {
	return (
		<div
			id={id}
			className={`w-full lg:px-16 md:px-12 px-5 py-3 text-justify` + className}
		>
			{children}
		</div>
	);
}
