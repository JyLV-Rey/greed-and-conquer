import { HoverClass } from "./HoverClasses";

function TechStack() {
  const tStack = [
    { name: "HTML", color: "#E34F26", icon: "../../../HTML5.svg", url: "https://html.com/"},
    { name: "CSS", color: "#1572B6", icon: "../../../CSS.svg", url: "https://www.w3.org/Style/CSS/"},
    { name: "JavaScript", color: "#F7DF1E", icon: "../../../JavaScript.svg", url: "https://www.w3schools.com/js/"},
    { name: "React", color: "#61DAFB", icon: "../../../React.svg", url: "https://reactjs.org/"},
    { name: "Vite", color: "#646CFF", icon: "../../../Vite.svg", url: "https://vitejs.dev/"},
    { name: "Tailwind", color: "#06B6D4", icon: "../../../Tailwind.svg", url: "https://tailwindcss.com/"},
    { name: "ChartJS", color: "#FF6384", icon: "../../../ChartJS.svg", url: "https://www.chartjs.org/"},
  ];

  return(
    <>
      <div className="w-screen bg-neutral-800 mt-5 p-4 text-center">
        <h2 className="text-6xl font-extrabold">Tech Stack</h2>
        <h3 className="text-xl font-medium">These are the programs that made this project possible</h3>
      </div>

      <div className="flex flex-row items-center justify-center bg-neutral-800 w-full h-auto mt-10 flex-grow">
        { tStack.map((tech, index) => (
            <a href={tech.url} target="blank">
            <div key={index} className={`${HoverClass} flex-grow hover:scale-[120%] flex flex-col items-center m-2 p-3 rounded-lg hover:bg-neutral-700 h-60 w-auto transition`}>
              <img src={tech.icon} alt={`${tech.name} icon`} className={`h-full w-full`}></img>
              <span className="text-2xl font-bold" style={{ color: tech.color }}>{tech.name}</span>
            </div>
            </a>
        ))}
      </div>
    </>
  )
}

export default TechStack;