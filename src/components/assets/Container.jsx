// eslint-disable-next-line react/prop-types
export default function Container({ children, id = "" }) {
  return (
    <div id={id} className="w-full p-20 text-justify">
      {children}
    </div>
  );
}
