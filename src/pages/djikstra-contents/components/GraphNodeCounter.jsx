
function GraphNodeCounter({NodeCount, SetNodeCount, NodeMin, NodeMax}) {
  const min = NodeMin;
  const max = NodeMax;

  function HandleAdd() {
    if(NodeCount < max) {
      SetNodeCount(NodeCount+1);
    }
  }

  function HandleSubtract() {
    if(NodeCount > min) {
      SetNodeCount(NodeCount-1);
    }
  }

  return(
    <div className="flex flex-col p-5 border-2 border-emerald-600 rounded-4xl">
      <p className='text-center text-2xl font-extrabold mb-2 text-emerald-400'>Number of Nodes</p>
      <div className='p-3 rounded-4xl'>
        <div className='flex flex-row w-full h-auto'>
  
          <button className="appearance-none w-fit bg-red-600 border-2 border-red-200 p-5 ease-(--my-beizer) hover:scale-110 duration-200 hover:bg-red-800 rounded-bl-4xl rounded-tl-4xl font-extrabold text-4xl" onClick={e => HandleSubtract(e)}>-</button>

          <div className="bg-emerald-200 border-t-2 border-b-2 flex flex-row w-fit text-center justify-center items-center p-5">
            <p className='font-bold text-emerald-950 text-3xl'>
              {NodeCount}
            </p>
          </div>

          <button className="appearance-none w-fit bg-emerald-600 border-2 border-emerald-200 ease-(--my-beizer) p-5 hover:scale-110 duration-200 hover:bg-emerald-800 rounded-br-4xl rounded-tr-4xl font-extrabold text-4xl text-emerald-400" onClick={e => HandleAdd(e)}>+</button>
  
        </div>
      </div>
    </div>
  );
}

export default GraphNodeCounter;