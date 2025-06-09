function GraphEdgeDisplay({Graph}) {

  return(
    <>
      {/* OUTER DIV */}
      {Graph.map((OuterValue, OuterIndex) => (
        <div key={OuterIndex} className="flex flex-col h-auto w-fit bg-neutral-800 rounded-4xl m-5 p-5">
          <h1 className='text-4xl font-extrabold text-center'>Node {OuterIndex+1}</h1>
          <div className="mt-5 flex flex-col p-5 border-2 border-neutral-700 rounded-4xl">
            <p className='text-2xl font-bold'>Edge Weights</p>

              {/* INNER DIV */}
              {OuterValue.map((InnerValue, InnerIndex) => (
              <div key={`${OuterIndex}-${InnerIndex}`} className="flex flex-row w-full text-2xl mt-4">
                <div className="w-1">
                  <p className='font-bold'>{InnerIndex+1}</p>
                </div>
                <div type="number" className="rounded 3xl bg-neutral-400 ml-10 w-30 text-neutral-900 font-bold">
                  <p className='text-center'>{InnerValue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default GraphEdgeDisplay;