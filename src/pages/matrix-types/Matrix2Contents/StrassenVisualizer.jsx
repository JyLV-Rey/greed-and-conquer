import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function StrassenVisualizer() {
  const [matrixA, setMatrixA] = useState({ a: '2', b: '4', c: '2', d: '3' });
  const [matrixB, setMatrixB] = useState({ e: '1', f: '3', g: '1', h: '4' });
  const [result, setResult] = useState(null);

  const handleChange = (e, matrix, key) => {
    const value = Number(e.target.value);
    matrix === 'A'
      ? setMatrixA(prev => ({ ...prev, [key]: value }))
      : setMatrixB(prev => ({ ...prev, [key]: value }));
      computeStrassen();
  };

  const computeStrassen = () => {
    const { a, b, c, d } = matrixA;
    const { e, f, g, h } = matrixB;

    const M1 = (a + d) * (e + h);
    const M2 = (c + d) * e;
    const M3 = a * (f - h);
    const M4 = d * (g - e);
    const M5 = (a + b) * h;
    const M6 = (c - a) * (e + f);
    const M7 = (b - d) * (g + h);

    const C11 = M1 + M4 - M5 + M7;
    const C12 = M3 + M5;
    const C21 = M2 + M4;
    const C22 = M1 - M2 + M3 + M6;

    setResult({ M1, M2, M3, M4, M5, M6, M7, C: [[C11, C12], [C21, C22]] });
  };

  return (
    <div className="p-10 bg-neutral-900 text-white space-y-6">
          <h2 className="text-4xl font-extrabold p-2 border-2 border-neutral-800 text-center mb-10 ">Try it Out!</h2>

      {/* Input Fields */}

      <div className="flex flex-row justify-center gap-20">
        <div className='flex flex-col p-5 border-2 rounded-4xl border-amber-700 bg-amber-950'>
        <h3 className="text-center text-4xl text-amber-200 font-bold mb-2 ">Matrix A</h3>
          <div className="flex flex-row flex-wrap w-70 p-8 h-50 bg-amber-800 rounded-4xl">
            {['a', 'b', 'c', 'd'].map((key) => (
              <input
                key={key}
                type="number"
                value={matrixA[key]}
                onChange={e => handleChange(e, 'A', key)}
                className="w-1/3 h-auto m-2 p-2 text-3xl font-extrabold flex-grow text-amber-950 appearance-none bg-amber-200 rounded-2xl text-center"
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col p-5 border-2 rounded-4xl border-amber-700 bg-amber-950'>
          <h3 className="text-center text-4xl text-amber-200 font-bold mb-2">Matrix B</h3>
          <div className="flex flex-row flex-wrap w-70 p-8 h-50 bg-amber-800 rounded-4xl">
            {['e', 'f', 'g', 'h'].map((key) => (
              <input
                key={key}
                type="number"
                value={matrixB[key]}
                onChange={e => handleChange(e, 'B', key)}
                className="w-1/3 h-auto m-2 p-2 text-3xl font-extrabold flex-grow text-neutral-900 appearance-none bg-amber-200 rounded-2xl text-center"
              />
            ))}
          </div>
        </div>
      </div>


      {/* Output */}
      {result && (
        <div className="flex flex-col h-full justify-center bg-neutral-900 text-white">


          <div className="text-xl bg-emerald-950 border-2 border-emerald-400 w-fit self-center p-8 rounded-4xl">
            <h1 className="mb-2 font-extrabold text-4xl text-center">Given:</h1>
            <p className='text-3xl'>
              <BlockMath math={`A = \\begin{bmatrix} ${matrixA.a} & ${matrixA.b} \\\\ ${matrixA.c} & ${matrixA.d} \\end{bmatrix}, \\quad B = \\begin{bmatrix} ${matrixB.e} & ${matrixB.f} \\\\ ${matrixB.g} & ${matrixB.h} \\end{bmatrix}`}/>
            </p>
          </div>

          <div className='flex flex-row justify-around mt-10'>

            <div className="text-xl bg-neutral-800 w-full self-center p-8 rounded-4xl">
              <h1 className="mb-2 font-extrabold text-5xl text-center">Solution:</h1>
              <p className='text-4xl'>
                {result && (
                  <BlockMath math={`C = \\begin{bmatrix} (${result.M1}) + (${result.M4}) - (${result.M5}) + (${result.M7}) & (${result.M3}) + (${result.M5}) \\\\ (${result.M2}) + (${result.M4}) & (${result.M1}) - (${result.M2}) + (${result.M3}) + (${result.M6}) \\end{bmatrix}`} />
                )}
              </p>

              {result && (
                <>
                  <h3 className="mt-4 mb-6 text-3xl font-bold">With:</h3>
                  <ul className="list-inside space-y-3 list-none text-2xl">
                    <li><InlineMath math={`M_1 = (${matrixA.a} + ${matrixA.d})(${matrixB.e} + ${matrixB.h}) = ${result.M1}`} /></li>
                    <li><InlineMath math={`M_2 = (${matrixA.c} + ${matrixA.d})(${matrixB.e}) = ${result.M2}`} /></li>
                    <li><InlineMath math={`M_3 = ${matrixA.a}(${matrixB.f} - ${matrixB.h}) = ${result.M3}`} /></li>
                    <li><InlineMath math={`M_4 = ${matrixA.d}(${matrixB.g} - ${matrixB.e}) = ${result.M4}`} /></li>
                    <li><InlineMath math={`M_5 = (${matrixA.a} + ${matrixA.b})(${matrixB.h}) = ${result.M5}`} /></li>
                    <li><InlineMath math={`M_6 = (${matrixA.c} - ${matrixA.a})(${matrixB.e} + ${matrixB.f}) = ${result.M6}`} /></li>
                    <li><InlineMath math={`M_7 = (${matrixA.b} - ${matrixA.d})(${matrixB.g} + ${matrixB.h}) = ${result.M7}`} /></li>
                  </ul>
                  <div className="mt-10 text-5xl bg-blue-800 border-2 border-blue-500 p-5 rounded-4xl">
                    <h3 className="text-5xl text-center font-bold">Final Matrix C:</h3>
                    <BlockMath math={`C = \\begin{bmatrix} ${result.C[0][0]} & ${result.C[0][1]} \\\\ ${result.C[1][0]} & ${result.C[1][1]} \\end{bmatrix}`} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StrassenVisualizer;
