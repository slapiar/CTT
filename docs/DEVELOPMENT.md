# Vývoj a odovzdávanie

Používaj Node 24 a npm 11. Inštaluj `npm ci` z koreňa, nie v jednotlivých balíkoch. Commituj `package-lock.json`. Závislosti aktualizuj vedome s následným `npm run check`.

Zmeny rob v pracovnej vetve, pred zlúčením over CI. Výsledok odovzdaj ako commit/PR; notebook aj cloud používajú rovnaký repozitár. CI kontroluje typy, dátové testy a build. Nenahrádza manuálnu WebGL skúšku oboch zobrazení, prepínania a zmeny veľkosti okna.

Pri nasadení skopíruj celý `apps/tenerife/dist` vrátane `cesium/`. Základ používa relatívne URL, podporuje podadresár bez klientského routovania. Po pridaní routovania treba znovu určiť base URL. Hosting ani automatické nasadenie zatiaľ nie sú naviazané na poskytovateľa.

Dokumentácia integrácie: https://cesium.com/blog/2024/02/13/configuring-vite-or-webpack-for-cesiumjs/ a https://docs.npmjs.com/cli/using-npm/workspaces .

## Plán grafického overenia

Najprv vizuálne overíme súčasné WebGL zobrazenia. Následne pripravíme samostatnú skúšku WebGPU v Babylon.js: dostupnosť na cieľovom zariadení a prehliadači, zhodu scény, prepínanie, resize, uvoľnenie GPU zdrojov a návrat k WebGL pri nedostupnosti WebGPU. WebGPU zatiaľ nie je implementované ani overené.

Babylon LITE evidujeme ako kandidáta na neskoršie vyhodnotenie možností, kompatibility a veľkosti výsledného balíka. Základ vývoja zostáva Babylon.js; nejde o rozhodnutie meniť engine.

## Výsledok počiatočného overenia

TypeScript, 3 dátové testy a produkčný build prešli; preview server sa spustil. V tomto pracovnom prostredí nebol dostupný Chromium pre automatizovaný WebGL test. Pred produktovým nasadením treba vizuálne overiť obe scény a ich opakované prepínanie. Build upozorňuje na veľkosť balíkov grafických enginov; načítavajú sa samostatne až na vyžiadanie.
