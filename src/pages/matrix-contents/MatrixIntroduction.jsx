import {InlineMath} from 'react-katex'
import FunctionGraph from '../matrix-contents/MatrixComplexityChart';

function MatrixIntroduction() {
  return(
    <>
      <div className='flex flex-col h-full bg-neutral-900'>
          <div className="flex flex-row h-auto w-screen">
            <div className='flex flex-col h-full p-10 border-2 border-neutral-800 w-fit mr-5 rounded-4xl'>
              <h1 className='text-6xl font-extrabold mb-10'>Introduction</h1>
              <p className='text-3xl text-neutral-400'>Named after <span className='text-3xl font-extrabold text-neutral-200'>Volk Strassen</span> himself, is a <span className='text-3xl font-extrabold text-neutral-200'>divide and conquer</span> algorithm for matrix multiplication. It is known to be faster for the multiplication of large matrices given its asymptotic complexity, but the <span className='text-3xl font-extrabold text-neutral-200'>naive algorithm</span> is often better for smaller matrices due to its non-linearity. The Strassen algorithm is <span className='text-3xl font-extrabold text-neutral-200'>slower than the fastest known algorithms for extremely large matrices</span>, but these algorithms not useful in practice. 

              He introduced the algorithm in <span className='font-extrabold text-neutral-200'>1969</span> — it was the first known method to beat the traditional cubic runtime of matrix multiplication.
              </p>
            </div>
            <div className='flex flex-col items-center bg-neutral-800 p-2 w-fit rounded-4xl'>
              <img src='src/assets/Strassen.webp' className='h-80 w-auto rounded-4xl m-2'></img>
              <h1 className="text-2xl font font-bold text-white">Volk Strassen</h1>
            </div>
          </div>


          <div className="flex flex-row w-screen mt-20">
            <div className="flex flex-col border-neutral-800 rounded-4xl border-2 w-500 p-10">
              <h1 className="text-6xl font-extrabold mb-10">Optimization</h1>
              <p className='text-3xl text-neutral-400'>
                The naive algorithm runs in <span className='font-extrabold text-neutral-200'>O(n³)</span> time, while Strassen improves this to approximately <span className='font-extrabold text-neutral-200'>O(n^2.81)</span>. Though newer algorithms like the <span className='font-extrabold text-neutral-200'>Coppersmith-Winograd</span> algorithm go further, they are impractical for most real-world applications.
              </p>
            </div>
            <div className="flex flex-col align-middle justify-center items-center border-neutral-800 bg-neutral-100 rounded-4xl border-2 ml-20 w-full h-full p-2">
                <FunctionGraph/>
                <div className="flex flex-row text-center text-6xl text-black justfy-center align-middle">
                  <InlineMath math="O^3 \quad \text{vs} \quad O^{2.81}"></InlineMath>
                </div>
            </div>
          </div>

        <div className="p-10 bg-neutral-800  mt-10">
        <h2 className="text-5xl font-extrabold mb-4">Limitations of Strassen's Algorithm</h2>
          <ul className="list-disc list-inside space-y-4 text-xl text-neutral-400">
            <li>
              <span className="font-bold text-white">Numerical instability:</span> It performs more additions and subtractions than the naive method, which can introduce rounding errors due to floating-point imprecision.
            </li>
            <li>
              <span className="font-bold text-white">Not cache-friendly:</span> Recursive calls may result in poor use of CPU cache and memory bandwidth, especially compared to block matrix multiplication.
            </li>
            <li>
              <span className="font-bold text-white">Not optimal for small matrices:</span> For small matrix sizes, the overhead of recursion outweighs the gains. It’s often slower than the naive <InlineMath math="O(n^3)" /> algorithm for small <InlineMath math="n" />.
            </li>
            <li>
              <span className="font-bold text-white">Requires matrix size to be a power of 2:</span> If matrix dimensions are not powers of 2, padding is needed, which can waste memory and compute.
            </li>
            <li>
              <span className="font-bold text-white">Not generalized easily:</span> Strassen only works cleanly for square matrices. Handling rectangular or sparse matrices complicates the implementation.
            </li>
            <li>
              <span className="font-bold text-white">Extra memory usage:</span> Temporary matrices used in the recursive step require additional space — more than naive multiplication.
            </li>
            <li>
              <span className="font-bold text-white">Asymptotic but not practical:</span> Although Strassen’s algorithm improves time complexity to <InlineMath math="O(n^{\log_2 7}) \approx O(n^{2.81})" />, this is only noticeable for large <InlineMath math="n" />.
            </li>
          </ul>
        </div>

          <div className='flex flex-col align-middle w-screen align-center justify-center p-5 bg-neutral-800 mt-10'>
            <h1 className='text-5xl text-center'>Powered By <InlineMath math="\texttt{KaTeX}" /></h1>
          </div>
      </div>
    </>
  )
}

export default MatrixIntroduction;