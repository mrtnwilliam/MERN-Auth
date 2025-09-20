import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Outlet />
    </div>
  );
}

export default App;
