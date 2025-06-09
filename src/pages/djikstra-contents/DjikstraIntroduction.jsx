import {InlineMath} from 'react-katex'
import FunctionGraph from './DjikstraComplexityChart';

function DijkstraIntroduction() {
  return(
    <>
      <div className='flex flex-col h-full bg-neutral-900'>

        <div className='flex flex-col h-auto w-1/2 self-center mb-10 bg-emerald-950 border-2 border-emerald-800 p-5 rounded-3xl'>
          <h2 className='text-center font-extrabold text-5xl'>Did You Know?</h2>
          <p className='text-center font-medium text-2xl mt-5'>He invented the algorithm in under <span className='text-amber-300 font-extrabold'>20-minutes</span>, while in a cafe after shopping with his fiancee!</p>
        </div>

          <div className="flex flex-row h-auto w-screen">
            <div className='flex flex-col h-full p-10 border-2 border-neutral-800 w-fit mr-5 rounded-4xl'>
              <h1 className='text-6xl font-extrabold mb-10'>Introduction</h1>
              <p className='text-3xl text-neutral-400'>Named after <span className='text-3xl font-extrabold text-neutral-200'>Edsger W. Dijkstra</span>, notably <span className='text-4xl font-extrabold text-neutral-100'>THE</span> algorithm to solve <span className='text-3xl font-extrabold text-neutral-200'>single-source shortest path</span> problems in a graph. Its effectivity is however limited when encountering graphs that have <span className='text-3xl font-extrabold text-neutral-200'>non-negative edge weights</span>.

              The algorithm was born in <span className='font-extrabold text-neutral-200'>1956</span>. And to this day, the algorithm still has its place on the hearts and the foundations of all domains of graph related problems, from logistics to neural mapping.
              </p>
            </div>
            <div className='flex flex-col items-center bg-neutral-800 p-2 w-fit rounded-4xl'>
              <img src='src/assets/Djikstra.webp' className='h-80 w-auto rounded-4xl m-2'></img>
              <h1 className="text-2xl font font-bold text-white">Edsger W. Dijkstra</h1>
            </div>
          </div>

          <div className="flex flex-row w-screen mt-20">
            <div className="flex flex-col border-neutral-800 rounded-4xl border-2 w-500 p-10">
              <h1 className="text-6xl font-extrabold mb-10">Optimization</h1>
              <p className='text-3xl text-neutral-400'>
                A brute force approach of finding the shortest path across all the nodes from the start node can take a complexity of <span className='font-extrabold text-neutral-200'><InlineMath math='O(2^V)'></InlineMath></span>. Using Djikstra's Algoritm with a <span className='font-extrabold text-neutral-200'>min-priority queue</span> (preferably Fibonnaci Heap), this can be improved to <span className='font-extrabold text-neutral-200'><InlineMath math='O(V + E \log V)'></InlineMath></span>, making it suitable for sparse graphs.
              </p>
            </div>
            <div className="flex flex-col align-middle justify-center items-center border-neutral-800 bg-neutral-100 rounded-4xl border-2 ml-20 w-full h-full p-2">
                <FunctionGraph/>
                <div className="flex flex-col text-center text-3xl text-black justfy-center align-middle">
                  <p><InlineMath math="O(V^2) \quad \text{vs} \quad O((V + E)\log V)"></InlineMath></p>
 
                  <p className='mt-5 text-2xl'>assuming <InlineMath math="E = \frac{V(V-1)}{2}"/>, the max number of edges</p>

                </div>
            </div>
          </div>

        <div className="p-10 bg-neutral-800  mt-10">
        <h2 className="text-5xl font-extrabold mb-4">Limitations of Dijkstra's Algorithm</h2>
          <ul className="list-disc list-inside space-y-4 text-xl text-neutral-400">
            <li>
              <span className="font-bold text-white">Only works with non-negative weights:</span> Dijkstra’s algorithm fails if the graph contains negative edge weights.
            </li>
            <li>
              <span className="font-bold text-white">Inefficient without priority queues:</span> The naive implementation runs in <InlineMath math="O(V^2)" />, which is too slow for large graphs.
            </li>
            <li>
              <span className="font-bold text-white">Does not handle all-pairs shortest paths:</span> It only computes shortest paths from a single source. For all-pairs, repeated execution or a different algorithm (e.g., Floyd-Warshall) is required.
            </li>
            <li>
              <span className="font-bold text-white">Does not track multiple shortest paths:</span> Dijkstra only returns one shortest path; extra work is needed to track all possible equal-cost paths.
            </li>
            <li>
              <span className="font-bold text-white">No support for dynamic updates:</span> Changes to edge weights or graph structure require re-running the entire algorithm.
            </li>
            <li>
              <span className="font-bold text-white">Space overhead:</span> Requires additional data structures for distances, visited status, and parent tracking, which may be costly in memory-constrained environments.
            </li>
            <li>
              <span className="font-bold text-white">Poor performance on dense graphs without optimization:</span> The benefits of the heap-based implementation diminish when the graph is dense and <InlineMath math="E \approx V^2" />.
            </li>
          </ul>
        </div>
          <div className='m-10 font-light text-xl text-neutral-300'>
            <p className='italic text-justify'>
              <span className='font-[Times_New_Roman] font-extrabold text-neutral-100 text-3xl items-center self-center text-center'>"  </span>What's the shortest way to travel from Rotterdam to Groningen? It is the algorithm for the shortest path, which I designed in about 20 minutes. One morning I was shopping in Amsterdam with my young fiancée, and tired, we sat down on the café terrace to drink a cup of coffee and I was just thinking about whether I could do this, and I then designed the algorithm for the shortest path. As I said, it was a 20-minute invention. In fact, it was published in 1959, three years later. The publication is still quite nice. One of the reasons that it is so nice was that I designed it without pencil and paper. Without pencil and paper you are almost forced to avoid all avoidable complexities. Eventually that algorithm became, to my great amazement, one of the cornerstones of my fame.<span className='font-[Times_New_Roman] font-extrabold text-neutral-100 text-3xl'>  "</span>
            </p>
            
            <p className='text-neutral-500 mt-2'>As quoted in the article Edsger W. Dijkstra from <a href="https://dl.acm.org/doi/pdf/10.1145/1787234.1787249" target='./blank' className='text-gray-400 italic hover:font-extrabold duration-100'>An interview with Edsger W. Dijkstra</a>.</p>
          </div>

          <div className='flex flex-col align-middle w-screen align-center justify-center p-5 bg-neutral-800'>
            <h1 className='text-5xl text-center'>Powered By <InlineMath math="\texttt{KaTeX}" /></h1>
          </div>
      </div>
    </>
  )
}

export default DijkstraIntroduction;
