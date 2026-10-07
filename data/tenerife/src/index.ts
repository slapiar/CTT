import { validateDestination } from '@ctt/tourism';
/** Approximate island centre, for initial camera framing only. */
export const tenerife = validateDestination({ id: 'tenerife', name: 'Tenerife', center: {longitude: -16.58, latitude: 28.29}, cameraHeight: 160000 });
