function GraphUnsafeBoxes({SetCycleBool, SetRNGMinValue, RNGValMax}) {

  function HandleNegative(e) {
    if(e.target.checked) {
      SetRNGMinValue(RNGValMax * -1)
    } else {
      SetRNGMinValue(0)
    }
  }

  return(
    <div className="flex flex-col w-auto h-full border-2 border-red-700 bg-red-950 ml-5 rounded-4xl p-5">
      <p className='text-4xl font-extrabold text-amber-500 text-center'>Breaking Points</p>
      <div className='flex flex-col justify-center align-middle h-full w-fill'>
        <label className="text-2xl mt-2 font-bold text-amber-600">
          <input type="checkbox" className="w-6 h-6 accent-red-500 rounded mr-2" onChange={e => HandleNegative(e)}/>Allow Negative Values
        </label>
        <label className="text-2xl mt-2 font-bold text-amber-600">
          <input type="checkbox" className="w-6 h-6 accent-red-500 rounded mr-2" onChange={e => SetCycleBool(e.target.checked)}/>Allow Cycles Values
        </label>
      </div>
    </div>
  );
}

export default GraphUnsafeBoxes;