import { InlineMath, BlockMath } from 'react-katex';

function Introduction() {
  return(
    <>
      <div className="flex flex-col h-full justify-center bg-neutral-900">
        <h2 className="text-4xl font-extrabold p-2 border-2 border-neutral-800 text-center">Formula</h2>

        <div className='p-10 w-screen'>
          <h1 className='text-4xl font-extrabold text-center'>Preface</h1>
          <p className='text-2xl text-center mt-10'>
            Let <InlineMath math="C" /> be the result of multiplying two square matrices{' '}
            <InlineMath math="A" /> and <InlineMath math="B" />, each of size{' '}
            <InlineMath math="2 \times 2" />. Using Strassen's Method to compute{" "}
            <InlineMath math="C = A \times B" />. :
          </p>
        </div>

        <div className='flex flex-row justify-around'>
          <div className="text-xl bg-neutral-800 w-fit self-center p-8 rounded-4xl">
            <h1 className="mb-2 font-extrabold text-3xl text-center">Given:</h1>
            <p className='text-3xl'>
              <BlockMath math={`A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}, \\quad B = \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix}`} />
            </p>
          </div>

          <div className="text-xl bg-neutral-800 w-fit self-center p-8 rounded-4xl">
            <h1 className="mb-2 font-extrabold text-3xl text-center">Solution:</h1>
            <p className='text-3xl'>
              <BlockMath math={`C = \\begin{bmatrix} M_1 + M_4 - M_5 + M_7 & M_3 + M_5 \\\\ M_2 + M_4 & M_1 - M_2 + M_3 + M_6 \\end{bmatrix}`} />
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-grow w-auto text-2xl rounded-4xl bg-neutral-800 m-10">
          <div className='flex flex-col p-10 mt-5 mb-5 ml-5 w-auto '>
            <p className="mb-10 text-3xl font-semibold">Where:</p>
            <ul className="list-inside space-y-5 list-none">
              <li><InlineMath math="M_1 = (a + d)(e + h)" /></li>
              <li><InlineMath math="M_2 = (c + d)e" /></li>
              <li><InlineMath math="M_3 = a(f - h)" /></li>
              <li><InlineMath math="M_4 = d(g - e)" /></li>
              <li><InlineMath math="M_5 = (a + b)h" /></li>
              <li><InlineMath math="M_6 = (c - a)(e + f)" /></li>
              <li><InlineMath math="M_7 = (b - d)(g + h)" /></li>
            </ul>
          </div>
          <div className='flex flex-col p-10 m-5 w-1/2 border-2 ml-10 rounded-4xl bg-neutral-400 flex-grow text-neutral-800'>
            <h2 className="text-3xl font-bold">Time Complexity</h2>
            <BlockMath math={`\\text{T}(n) = 7T(\\frac{n}{2}) + O(n^2)`} />
            <p className="text-3xl font-bold">This Recurrence Solves To:</p>
            <BlockMath math={`\\text{T}(n) = O(n^{\\log_2 7}) \\approx O(n^{2.81})`} />
            <h2 className="text-3xl font-bold mb-4">Strassen vs Naive Multiplication</h2>
            <ul className="list-disc list-inside text-2xl text-neutral-800">
              <li><strong>Naive:</strong> Requires 8 multiplications and 4 additions.</li>
              <li><strong>Strassen:</strong> Reduces to 7 multiplications and 18 additions/subtractions.</li>
              <li><strong>Trade-off:</strong> More additions, but faster for larger matrices due to reduced multiplication cost.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;