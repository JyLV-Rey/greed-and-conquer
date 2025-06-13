import { Link } from "react-router-dom";

function DjikstraButton() {
  return (
    <Link to="/Djikstra">
      <div className="ease-(--my-beizer) duration-300 hover:scale-[110%] flex flex-col items-center justify-center m-5 w-150 p-6 bg-neutral-800 border-2 border-neutral-800 rounded-lg">
        <img src="people/Djikstra.webp" className="object-cover w-auto" alt="A Photo of Edgsar Djikstra" />
        <h1 className="font-extrabold text-3xl mt-5 text-center">Djikstra's Algorithm</h1>
        <p className="font-medium text-md mt-5 text-center">Explore the algorithm behind the curtain that is in charge of finding the shortest path to travel everywhere!</p>
      </div>
    </Link>
  );
}

function StrassenButton() {
  return (
    <Link to="/Matrix">
    <div className={`ease-(--my-beizer) duration-300 hover:scale-[110%] flex flex-col items-center justify-center m-5 w-150 p-6 bg-neutral-800 border-2 border-neutral-800 rounded-lg`}>
      <img src="people/Strassen.webp" className="object-cover w-auto" alt="A Photo of Edgsar Djikstra" />
      <h1 className="font-extrabold text-3xl mt-5 text-center">Strassen's Matrix Multiplication</h1>
      <p className="font-medium text-md mt-5 text-center">Explore a complex but intuiative way of multiplying square matrixes!</p>
    </div>
    </Link>
  );
}

export {DjikstraButton, StrassenButton};