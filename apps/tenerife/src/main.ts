import { tenerife } from '@ctt/data-tenerife';
import { actionButton } from '@ctt/ui';
import type { ViewHandle } from '@ctt/tourism';
import './style.css';
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `<header><p>CANARIA TOPTOUR</p><h1>Tenerife</h1><p>Prvý ostrov. Spoločný svet možností.</p></header><main><nav aria-label="Zobrazenie"></nav><p id="status" role="status">Vyber si zobrazenie.</p><section id="view" aria-label="Interaktívne zobrazenie"></section></main><footer>CTT · Vývojový základ 0.1.0</footer>`;
const container = document.querySelector<HTMLElement>('#view')!;
const status = document.querySelector<HTMLElement>('#status')!;
let current: ViewHandle | undefined;
let revision = 0;
async function show(mode: 'map' | '3d') {
  const request = ++revision;
  current?.dispose(); current = undefined; container.replaceChildren();
  status.textContent = 'Načítavam…';
  try {
    const mount = mode === 'map' ? (await import('@ctt/map')).mountMap : (await import('@ctt/3d')).mountScene;
    if (request !== revision) return;
    current = mount(container, tenerife);
    status.textContent = mode === 'map' ? 'Základný glóbus bez mapových snímok a výškového terénu.' : 'Ukážková 3D scéna · otáčaj myšou alebo dotykom.';
  } catch (error) {
    if (request !== revision) return;
    container.replaceChildren();
    status.textContent = 'Zobrazenie sa nepodarilo spustiť. Skontroluj podporu WebGL a skús to znova.';
    console.error(error);
  }
}
document.querySelector('nav')!.append(actionButton('Glóbus · Cesium', () => void show('map')), actionButton('3D · Babylon.js', () => void show('3d')));
if (import.meta.hot) import.meta.hot.dispose(() => { revision++; current?.dispose(); });
