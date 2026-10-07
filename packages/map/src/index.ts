import { Cartesian3, EllipsoidTerrainProvider, Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import type { Destination, ViewHandle } from '@ctt/tourism';
export function mountMap(container: HTMLElement, destination: Destination): ViewHandle {
  // No Ion account or third-party imagery required for the initial globe.
  const viewer = new Viewer(container, { baseLayer: false, terrainProvider: new EllipsoidTerrainProvider(), baseLayerPicker: false, geocoder: false, animation: false, timeline: false, homeButton: false, sceneModePicker: false, navigationHelpButton: false, fullscreenButton: false });
  viewer.camera.setView({ destination: Cartesian3.fromDegrees(destination.center.longitude, destination.center.latitude, destination.cameraHeight) });
  viewer.entities.add({name: destination.name, position: Cartesian3.fromDegrees(destination.center.longitude, destination.center.latitude), point: {pixelSize: 12}, label: {text: destination.name}});
  return { dispose() { if (!viewer.isDestroyed()) viewer.destroy(); } };
}
