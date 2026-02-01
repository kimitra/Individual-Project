import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
      </main>
    </>
  );
}

export default App;
