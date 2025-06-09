import { HoverClass } from "../../features/HoverClasses";
import {Link} from "react-router-dom";

function DNCNavBar(){
  const NewHover = `${HoverClass} hover:text-4xl font-extrabold hover:bg-neutral-700 border-2 border-neutral-700 p-2 m-2 rounded-md`;
  return(
    <div className="flex flex-row items-center justify-around border-b-neutral-800 border-b-2 w-full ">
      <nav className="flex flex-row align-middle text-2xl">
        <Link to="/Matrix" className={`${NewHover}`}>Introduction</Link>
        <Link to="/Matrix2" className={`${NewHover}`}>2x2 Matrix</Link>
        <Link to="/Matrix4" className={`${NewHover}`}>4x4 Matrix</Link>
      </nav>
    </div>
  )
}

export default DNCNavBar;