function GraphZeroParameter({ZeroProbability, SetZeroProbability}) {
  function HandleProbability(e) {
      const val = e.target.value;
      const value = val === "" ? "" : Number(val);

      if(value >= 0 && value <= 100) {
        SetZeroProbability(value);
      }
  }

  return(
    <div className="flex flex-col w-auto h-full border-2 border-emerald-500 rounded-4xl mr-5 p-5">
      <p className='text-2xl font-extrabold text-emerald-400 text-center'>Probability of Zero</p>
      <input value={ZeroProbability} type="number" onChange={e => HandleProbability(e)} className="mt-5 h-full bg-emerald-800 text-center rounded-4xl text-4xl font-bold w-60 hover:scale-110 duration-200 ease-(--my-beizer)"/>
    </div>
  );
}

export default GraphZeroParameter