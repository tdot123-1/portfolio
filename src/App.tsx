import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/custom/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
