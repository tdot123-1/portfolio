import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
