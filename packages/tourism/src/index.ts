/** WGS84; longitude first, angles in degrees, altitude in metres. */
export interface GeoPoint { longitude: number; latitude: number; altitude?: number }
export interface Destination { id: string; name: string; center: GeoPoint; cameraHeight: number }
export interface ViewHandle { dispose(): void }
export function validateDestination(value: Destination): Destination {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.id) || !value.name.trim()) throw new Error('Invalid destination identity');
  const {longitude, latitude, altitude} = value.center;
  if (!Number.isFinite(longitude) || Math.abs(longitude) > 180 || !Number.isFinite(latitude) || Math.abs(latitude) > 90) throw new Error('Invalid WGS84 coordinates');
  if (altitude !== undefined && !Number.isFinite(altitude)) throw new Error('Invalid altitude');
  if (!Number.isFinite(value.cameraHeight) || value.cameraHeight <= 0) throw new Error('Invalid camera height');
  return value;
}
