import { InlineMath, BlockMath } from 'react-katex';

function Introduction() {
  return(
    <>
      <div className="flex flex-col h-full justify-center bg-neutral-900">
        <div className='flex flex-col justify-center'>
          <h2 className="text-4xl font-extrabold p-2 border-2 border-neutral-800 text-center">Formula</h2>
        </div>


        <div className='p-10 w-screen'>
          <h1 className='text-4xl font-extrabold text-center'>Preface</h1>
          <p className='text-2xl text-center mt-10'>
            Let <InlineMath math="C" /> be the result of multiplying two square matrices{' '}
            <InlineMath math="A" /> and <InlineMath math="B" />, each of size{' '}
            <InlineMath math="4 \times 4" />. Using Strassen's Method, we recursively divide the matrices
            into 2x2 blocks and compute <InlineMath math="C = A \times B" /> as follows:
          </p>
        </div>

        <div className='flex flex-row justify-around'>
          <div className="text-xl bg-neutral-800 w-auto m-10 self-center p-8 rounded-4xl">
            <h1 className="mb-2 font-extrabold text-3xl text-center">Multiply:</h1>
            <BlockMath math={`
              A = \\begin{bmatrix}
              a & b & c & d \\\\
              e & f & g & h \\\\
              i & j & k & l \\\\
              m & n & o & p
              \\end{bmatrix}, \\quad
              B = \\begin{bmatrix}
              q & r & s & t \\\\
              u & v & w & x \\\\
              y & z & A & B \\\\
              C & D & E & F
              \\end{bmatrix}
            `} />

            <p className='text-2xl text-center font-extrabold'>
              Partition A and B into 2x2 blocks:
            </p>


            <div className='flex flex-row justify-center'>
              <div className='mr-10'>
                <BlockMath math={`
                  A = \\begin{bmatrix}
                    A_{11} & A_{12} \\\\
                    A_{21} & A_{22}
                  \\end{bmatrix}`}/>
              </div>
              <div>
                <BlockMath math={`B = \\begin{bmatrix}
                    B_{11} & B_{12} \\\\
                    B_{21} & B_{22}
                  \\end{bmatrix}
                `} />
              </div>
            </div>


            <p className='text-2xl font-extrabold mt-4 text-center'>
              where each block is a 2x2 matrix
            </p>

            <div className="flex flex-row flex-wrap text-2xl mt-6 justify-around">
              <div>
                <BlockMath math={`A_{11} = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}`} />
                <BlockMath math={`A_{12} = \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix}`} />
              </div>
              <div>
                <BlockMath math={`A_{21} =\\begin{bmatrix} i & j \\\\ k & l \\end{bmatrix}`} />
                <BlockMath math={`A_{22} = \\begin{bmatrix} m & n \\\\ o & p \\end{bmatrix}`} />
              </div>
              <div>
                <BlockMath math={`B_{11} = \\begin{bmatrix} q & r \\\\ s & t \\end{bmatrix}`} />
                <BlockMath math={`B_{12} = \\begin{bmatrix} u & v \\\\ w & x \\end{bmatrix}`} />
              </div>
              <div>
                <BlockMath math={`B_{21} = \\begin{bmatrix} y & z \\\\ A & B \\end{bmatrix}`} />
                <BlockMath math={`B_{22} = \\begin{bmatrix} C & D \\\\ E & F \\end{bmatrix}`} />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-around'>
          <div className="text-xl bg-neutral-800 w-fit self-center p-8 rounded-4xl">
            <h1 className="mb-2 font-extrabold text-3xl text-center">Given:</h1>
            <p className='text-3xl'>
              <BlockMath math={`A = \\begin{bmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{bmatrix}, \\quad B = \\begin{bmatrix} B_{11} & B_{12} \\\\ B_{21} & B_{22} \\end{bmatrix}`} />
              <br />
              <span className="text-xl block mt-4 text-center">Where each block is a 2x2 matrix</span>
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

          <div className='flex flex-col p-10 mt-5 mb-5 ml-5 w-auto'>
            <p className="mb-10 text-3xl font-semibold">Where:</p>
            <ul className="list-inside space-y-5 list-none">
              <li><InlineMath math="M_1 = (A_{11} + A_{22})(B_{11} + B_{22})" /></li>
              <li><InlineMath math="M_2 = (A_{21} + A_{22})B_{11}" /></li>
              <li><InlineMath math="M_3 = A_{11}(B_{12} - B_{22})" /></li>
              <li><InlineMath math="M_4 = A_{22}(B_{21} - B_{11})" /></li>
              <li><InlineMath math="M_5 = (A_{11} + A_{12})B_{22}" /></li>
              <li><InlineMath math="M_6 = (A_{21} - A_{11})(B_{11} + B_{12})" /></li>
              <li><InlineMath math="M_7 = (A_{12} - A_{22})(B_{21} + B_{22})" /></li>
            </ul>
          </div>

          <div className='flex flex-col p-10 m-5 w-1/2 border-2 ml-10 rounded-4xl bg-neutral-400 flex-grow text-neutral-800'>
            <h2 className="text-3xl font-bold">Recursive Time Complexity</h2>
            <BlockMath math={`\\text{T}(n) = 7T(\\frac{n}{2}) + O(n^2)`} />
            <p className="text-3xl font-bold">This Recurrence Solves To:</p>
            <BlockMath math={`\\text{T}(n) = O(n^{\\log_2 7}) \\approx O(n^{2.81})`} />
            <h2 className="text-3xl font-bold mb-4">Strassen vs Naive Multiplication</h2>
            <ul className="list-disc list-inside text-2xl text-neutral-800">
              <li><strong>Naive:</strong> 64 multiplications and 48 additions (for 4×4).</li>
              <li><strong>Strassen:</strong> Uses recursive 2×2 blocks to reduce multiplications to 49.</li>
              <li><strong>Trade-off:</strong> More overhead and memory, but lower multiplication count for large matrices.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Introduction;