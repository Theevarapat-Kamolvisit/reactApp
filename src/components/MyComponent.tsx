import React, { useContext, useEffect } from "react";
import Playcanvas from "./PlayCanvas";
import PlaycanvasContext from "./PlaycanvasContext";

const MyComponent: React.FC = () => {
  const playcanvas: Playcanvas = useContext(PlaycanvasContext);

  useEffect(() => {
    playcanvas.connectToIframe();
  }, []);

  return <div className="my-component"></div>;
};

export default MyComponent;
