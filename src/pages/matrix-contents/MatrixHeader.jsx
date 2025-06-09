import MatrixNavBar from './MatrixNavBar'

function MatrixHeader() {
  return(
    <div className="flex flex-col">
      <div className="bg-neutral-800 align-middle justify-center w-screen items-center mt-10 mb-10 p-6">
        <h1 className="text-center font-extrabold text-6xl">Strassen's Matrix Multiplication</h1>
        <MatrixNavBar/>
      </div>
    </div>
  );
}

export default MatrixHeader;