import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Pages />} />
      </Routes>
    </>
  );
}

export default App;
