import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateDestination } from '../packages/tourism/src/index.ts';
const valid = {id: 'tenerife', name: 'Tenerife', center: {longitude: -16.58, latitude: 28.29}, cameraHeight: 160000};
test('accepts WGS84 boundary coordinates', () => { assert.doesNotThrow(() => validateDestination({...valid, center: {longitude: -180, latitude: 90}})); });
test('rejects invalid coordinates and camera heights', () => {
  for (const longitude of [181, NaN, Infinity]) assert.throws(() => validateDestination({...valid, center: {longitude, latitude: 28}}));
  for (const latitude of [-91, NaN, Infinity]) assert.throws(() => validateDestination({...valid, center: {longitude: 0, latitude}}));
  for (const cameraHeight of [0, -1, NaN, Infinity]) assert.throws(() => validateDestination({...valid, cameraHeight}));
});
test('rejects unsafe destination IDs', () => { assert.throws(() => validateDestination({...valid, id: '../tenerife'})); });
