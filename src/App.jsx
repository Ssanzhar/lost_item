import { useRoutes } from "react-router-dom";
import Found from "./routes/Found";
import Lost from "./routes/Lost";
import Home from "./routes/Home";
import AppNavBar from "./components/AppBar";
import AboutUs from "./routes/AboutUs";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/found",
      element: <Found />,
    },
    {
      path: "/lost",
      element: <Lost />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ]);

  return (
    <div>
      <AppNavBar />
      {routes}
    </div>
  );
}

export default App;
