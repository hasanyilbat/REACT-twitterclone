import "./App.css";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const showRoutes = useRoutes(routes);

  return <Provider store={store}>{showRoutes}</Provider>;
}

export default App;
