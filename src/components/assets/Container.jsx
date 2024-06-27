// eslint-disable-next-line react/prop-types
export default function Container({ children, id = "" }) {
  return (
    <div id={id} className="w-full mt-2 p-16 text-justify">
      {children}
    </div>
  );
}
