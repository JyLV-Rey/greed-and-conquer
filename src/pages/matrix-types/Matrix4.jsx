import MatrixHeader from '../matrix-contents/MatrixHeader';
import { InlineMath, BlockMath } from 'react-katex';
import Introduction from './Matrix4Contents/Introduction';
import StrassenVisualizer from './Matrix2Contents/StrassenVisualizer';

function Matrix4(){

  return(
    <>
      <div className='flex flex-col h-full justify-center bg-neutral-900'>
        <MatrixHeader/>
        <Introduction/>
      </div>
    </>


  );
}

export default Matrix4;