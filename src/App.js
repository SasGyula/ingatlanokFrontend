import Ingatlanok from './components/Ingatlanok';
import Urlap from './pages/UrlapOldal';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Public from './pages/Public';
import UrlapOldal from './pages/UrlapOldal';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>Ingatlanok</h1> 
      </header>
      <article>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="urlap" element={<UrlapOldal />} />
          <Route path="ingatlanok" element={<Public />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </article>
    </div>
  );
}

export default App;
