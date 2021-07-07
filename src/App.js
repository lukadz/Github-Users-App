import Routes from "./Routes";

import { useAuth } from "./context/AuthContexts";
import { UseCotnextProvider } from "./context/UserContext";
import NavBar from "./components/NavBar";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <UseCotnextProvider>
      {isAuthenticated ? <NavBar /> : null}
      <Routes />
    </UseCotnextProvider>
  );
}

export default App;
