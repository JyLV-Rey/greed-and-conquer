import {Link} from "react-router-dom";
import { HoverClass } from "./HoverClasses";


function NavBar() {
  const NewHover = `${HoverClass} hover:text-4xl font-extrabold hover:bg-neutral-700 p-2 m-2 rounded-md`;
  return (
    <div className="flex flex-row items-center justify-around bg-neutral-900 border-b-neutral-800 border-b-2 w-full ">
      <nav className="flex flex-row justify-around text-2xl">
        <Link to="/" className={`${NewHover}`}>Home</Link>
        <Link to="/Djikstra" className={`${NewHover}`}>Djiksta's Algorithm</Link>
        <Link to="/Matrix" className={`${NewHover}`}>Strassen's Matrix Multiplication</Link>
      </nav>
    </div>
  )
}

export default NavBar;