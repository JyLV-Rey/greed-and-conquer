function GraphMaxValueParameter({MaxValue, SetMaxValue}) {
  function HandleMaxValue(e) {
      const val = e.target.value;
      const value = val === "" ? "" : Number(val);

      if(value >= 0) {
        SetMaxValue(value);
      }
  }

  return(
    <div className="flex flex-col w-auto h-full border-2 border-emerald-500 ml-5 rounded-4xl p-5">
      <p className='text-2xl font-extrabold text-emerald-400 text-center'>Max Value</p>
      <input value={MaxValue} type="Number" onChange={e => HandleMaxValue(e)} className="mt-5 h-full bg-emerald-800 text-center rounded-4xl text-4xl font-bold w-60 hover:scale-110 duration-200 ease-(--my-beizer)"/>
    </div>
  );
}

export default GraphMaxValueParameter;