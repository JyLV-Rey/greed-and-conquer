import DjikstraNavBar from './DjikstraNavBar';

function DjikstraHeader() {
  return (
    <div className="flex flex-col">
      <div className="bg-neutral-800 align-middle justify-center w-screen items-center mt-10 mb-10 p-6">
        <h1 className="text-center font-extrabold text-6xl">Djikstra's Algorithm</h1>
        <DjikstraNavBar/>
      </div>
    </div>
  );
}

export default DjikstraHeader;