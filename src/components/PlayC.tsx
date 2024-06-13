import * as pc from "playcanvas";

function PlayC() {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  const app = new pc.Application(canvas);

  // fill the available space at full resolution
  app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
  app.setCanvasResolution(pc.RESOLUTION_AUTO);

  // ensure canvas is resized when window changes size
  window.addEventListener("resize", () => app.resizeCanvas());

  // create box entity
  const box = new pc.Entity("cube");
  box.addComponent("model", {
    type: "box",
  });
  app.root.addChild(box);

  // create camera entity
  const camera = new pc.Entity("camera");
  camera.addComponent("camera", {
    clearColor: new pc.Color(0.1, 0.2, 0.3),
  });
  app.root.addChild(camera);
  camera.setPosition(0, 0, 3);

  //new material testing
  //var material = new pc.BasicMaterial();

  //new entity testing
  var entity = new pc.Entity("cylinder");
  entity.addComponent("model", {
    type: "cylinder",
  });
  entity.addComponent("render", {});
  app.root.addChild(entity);
  entity.setPosition(1.5, 0, 0);

  // create directional light entity
  const light = new pc.Entity("light");
  light.addComponent("light");
  app.root.addChild(light);
  light.setEulerAngles(45, 0, 0);

  // rotate the box according to the delta time since the last frame
  app.on("update", (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt));

  app.start();
  return null;
}

export default PlayC;
