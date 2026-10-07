import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
export function mountScene(container: HTMLElement): { dispose(): void } {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-label', 'Ukážková 3D scéna');
  canvas.style.cssText = 'width:100%;height:100%;display:block;touch-action:none';
  container.append(canvas);
  let engine: Engine;
  try { engine = new Engine(canvas, true); } catch (error) { canvas.remove(); throw error; }
  const scene = new Scene(engine);
  const camera = new ArcRotateCamera('camera', Math.PI / 4, Math.PI / 3, 6, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  MeshBuilder.CreateTorusKnot('demo', {radius: 1, tube: 0.2}, scene);
  engine.runRenderLoop(() => scene.render());
  const observer = new ResizeObserver(() => engine.resize());
  observer.observe(container);
  return { dispose() { observer.disconnect(); scene.dispose(); engine.dispose(); canvas.remove(); } };
}
