import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import PlayC from "./components/PlayC.tsx";
import PlaycanvasContext from "./components/PlaycanvasContext.tsx";
import Playcanvas from "./components/PlayCanvas.tsx";
import "bootstrap/dist/css/bootstrap.css";

/*ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <PlayC />
  </React.StrictMode>
);*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PlaycanvasContext.Provider value={new Playcanvas()}>
    <App />
  </PlaycanvasContext.Provider>
);
