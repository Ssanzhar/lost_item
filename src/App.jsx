import { useRoutes } from "react-router-dom";
import Found from "./routes/Found";
import Lost from "./routes/Lost";
import Home from "./routes/Home";
import AppNavBar from "./components/AppBar";

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
  ]);

  return (
    <div>
      <AppNavBar />
      {routes}
    </div>
  );
}

export default App;
