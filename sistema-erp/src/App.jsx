import "./App.css";

import InsulmosPage from "./pages/insulmos/insulmos.page";
import LoginPage from "./pages/login/login.page";

const App = () => {
  let isLogged = true;
  return (
    <div>
      Tela de Inicial
      <div>{isLogged ? <InsulmosPage /> : <LoginPage />}</div>
    </div>
  );
};

export default App;
