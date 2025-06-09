import MatrixHeader from '../matrix-contents/MatrixHeader';
import { InlineMath, BlockMath } from 'react-katex';
import Introduction from './Matrix2Contents/Introduction';
import StrassenVisualizer from './Matrix2Contents/StrassenVisualizer';

function Matrix2(){
  return(
    <>
      <div className='flex flex-col h-full justify-center bg-neutral-900'>
        <MatrixHeader/>
        <Introduction/>
        <StrassenVisualizer/>
      </div>
    </>
  );
}

export default Matrix2;