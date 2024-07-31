import Home from "./Home";
import { Routes, Route } from 'react-router-dom'
import { MovieID } from "./pages/MovieID";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieID/>} />
    </Routes>
  );
}

export default App;