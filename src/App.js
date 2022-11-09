import "./App.css";
import {  RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import 'react-photo-view/dist/react-photo-view.css';



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
