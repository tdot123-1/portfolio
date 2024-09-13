import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
