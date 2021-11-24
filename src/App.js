import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="main">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
