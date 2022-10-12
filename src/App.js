import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
