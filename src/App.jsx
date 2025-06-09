import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Djikstra from './pages/Djikstra';
import DjikstraSolve from './pages/djikstra-contents/DjikstraSolve';
import Matrix from './pages/Matrix';
import NavBar from './features/NavBar';
import Matrix2 from './pages/matrix-types/Matrix2';
import Matrix4 from './pages/matrix-types/Matrix4';

export default function App() {
  return (
    <>
      <div div className="flex flex-col items-start justify-start h-auto w-screen bg-neutral-900">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Djikstra" element={<Djikstra />} />
          <Route path="/DjikstraSolve" element={<DjikstraSolve />} />
          <Route path="/Matrix" element={<Matrix />} />
          <Route path="/Matrix2" element={<Matrix2 />} />
          <Route path="/Matrix4" element={<Matrix4 />} />
        </Routes>
      </div>
    </>
  );
}
