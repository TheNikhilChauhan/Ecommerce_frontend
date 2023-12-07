import { Outlet } from "react-router-dom";
import NavItems from "./Components/NavItems";

function App() {
  return (
    <div>
      <NavItems />
      <Outlet />
    </div>
  );
}

export default App;
