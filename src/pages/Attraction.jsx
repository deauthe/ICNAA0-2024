import places from "../places.json";

export default function AttractionPage() {
  return (
    <div className="flex w-5/6 mx-auto flex-col justify-center items-center h-screen">
      {/* TODO: improve the UI */}
      {places.map((place, index) => (
        <div
          key={index}
          className="mb-3 border border-secondary rounded-md shadow shadow-slate-400 p-2">
          {/* <img src={place.image} alt={place.name} /> */}
          <h3>{place.name}</h3>
          <p>{place.details}</p>
        </div>
      ))}
    </div>
  );
}
