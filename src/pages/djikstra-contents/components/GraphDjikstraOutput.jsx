function GraphDjikstraOutput( {data} ) {
  return(
    <>
      <div className='flex flex-col flex-wrap w-full items-center justify-center align-middle gap-5'>
        <h2 className="text-4xl font-extrabold text-center p-2 self-center text-blue-200">Results</h2>
        <div className='flex flex-col text-emerald-200 w-auto bg-emerald-900 border-2 border-emerald-400 p-2 font-extrabold text-2xl rounded-2xl'>
          <h1>Start Node: {data.node + 1}</h1>
        </div>
        <div className='flex flex-col text-amber-200 w-auto bg-amber-900 border-2 border-amber-400 p-2 font-extrabold text-2xl rounded-2xl'>
          <h1>Total Array Iterations: {data.arrayIterations}</h1>
        </div>
        <div className="flex flex-row gap-5 flex-wrap justify-around p-2 border-2 border-blue-600 rounded-2xl m-2">
          {Object.entries(data.path_info).map(([node, info]) => (
            <div key={node} className='flex flex-col w-auto bg-blue-900 border-2 border-blue-600 text-blue-200 p-2 font-extrabold text-2xl rounded-2xl'>
              <h3>Node: {Number(node) + 1}</h3>
              <p>Total distance: {info.total_distance}</p>
              <p>Path:</p>
              <div className='flex flex-row border-2 justify-around w-full self-center border-blue-500 rounded-2xl'>
                
                {Object.entries(info.path).map(([inner_node, inner_info]) => (
                  <div key={inner_node} className='flex flex-row justify-around items-center allign-middle p-3 m-2 w-auto bg-blue-400 border ml-2  rounded-2xl border-blue-200 text-blue-950'>
                    <p>{inner_info + 1}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GraphDjikstraOutput;