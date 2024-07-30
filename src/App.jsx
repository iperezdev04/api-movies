import Home from "./Home";
import { Routes, Route } from 'react-router-dom'
// import { CharacterPage } from "./components/pages/CharacterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/character/:id" element={<CharacterPage />} /> */}
    </Routes>
  );
}

export default App;