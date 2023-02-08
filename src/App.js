import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageSignin from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="signin" element={<PageSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
