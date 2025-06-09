function GraphZeroParameter({StartNode, SetStartNode, EndNode}) {
  function HandleStartNode(e) {
      const val = e.target.value;
      const value = val === "" ? "" : Number(val);

      if(value >= 1 && value <= EndNode) {
        SetStartNode(value);
      }
  }

  return(
    <div className="flex flex-col w-auto h-full border-2 border-emerald-500 rounded-4xl mr-5 p-5">
      <p className='text-2xl font-extrabold text-emerald-400 text-center'>Starting Node</p>
      <input value={StartNode} type="number" onChange={e => HandleStartNode(e)} className="mt-5 h-full bg-emerald-800 text-center rounded-4xl text-4xl font-bold w-60 hover:scale-110 duration-200 ease-(--my-beizer)"/>
    </div>
  );
}

export default GraphZeroParameter