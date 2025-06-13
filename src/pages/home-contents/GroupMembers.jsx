import Marquee from "react-fast-marquee";
function GroupMembers() {

  const Members = [
    {name:"Jyeshua Velasco", picture:"/group_members/velasco.png", url: "https://www.facebook.com/jyeshuareylao.velasco/"},
    {name:"Jen Nataba", picture:"/group_members/nataba.png", url: "https://www.facebook.com/oxyjen311"},
    {name:"Frances Montemayor", picture:"/group_members/montemayor.png", url: "https://www.facebook.com/raineysznxoxo"},
    {name: "Matan Exconde", picture:"/group_members/exconde.png", url: "https://www.facebook.com/matan.exconde"},
    {name:"Jorelle Lenar", picture:"/group_members/lenar.png", url:"https://www.facebook.com/jorellecybee.lenar"},
    {name:"Shikina Cabral", picture:"/group_members/cabral.png", url:"https://www.facebook.com/shikinacabral"},
    {name:"Princess Padauan", picture:"/group_members/padauan.png", url:"https://www.facebook.com/intetcutiepieee"},
    {name:"Luiz Dela Cruz", picture:"/group_members/dela_cruz.png", url:"https://www.facebook.com/luismigueldlcrz"},
    {name:"Eric Samilliano", picture:"/group_members/samilliano.png", url: "https://www.facebook.com/luismigueldlcrz"}
  ]
  return (
    <>
  <div className=" m-5 mt-10 p-4 bg-neutral-800 w-screen align-middle justify-center text-center">
    <h1 className="text-6xl font-extrabold">
      Meet the Members
    </h1>
    <h2 className="text-xl font-medium">These are the people that made the website possible.</h2>
  </div>

  <Marquee pauseOnHover="true" speed={100} gradient={true} gradientColor={[26, 26, 26]} gradientWidth={200}>
    {Members.map((member, index) => (
    <a href={member.url} target="_blank" rel="noopener noreferrer" key={index} className="">
      <div className="flex flex-col bg-neutral-800 hover:bg-neutral-700 rounded-lg h-auto w-70 m-2 p-1 hover:scale-120 duration-300 ease-(--my-beizer) ">
        <img src={member.picture} alt={`${member.name}'s Picture`} className="object-cover h-auto w-auto rounded-t-lg" />
        <div key={index} className="p-4">
          <h2 className="text-sm font-extrabold text-center justify-center align-middle">{member.name}</h2>
        </div>
      </div>
    </a>
    ))}
  </Marquee>
    </>
  );
}

export default GroupMembers;