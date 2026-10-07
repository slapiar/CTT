# CTT — Canaria TopTour

Spoločný základ pre projekty TOPTOUR na Kanárskych ostrovoch. Tenerife je prvá implementácia. Jeden Git repozitár, npm workspaces a spoločný lockfile.

## Spustenie

Node.js 24 LTS a npm 11. Z koreňa repozitára:

```sh
npm ci
npm run dev
```

`npm run check` overí TypeScript, dátové testy a produkčný build. `npm run preview` sprístupní build. Výstup: `apps/tenerife/dist`.

## Členenie

| Cesta | Zodpovednosť |
| --- | --- |
| `apps/tenerife` | Pilotná webová aplikácia, skladanie modulov |
| `packages/tourism` | Nezávislé dátové typy a validácia |
| `packages/map` | Cesium, geografické zobrazenie |
| `packages/3d` | Babylon.js, lokálne interaktívne scény |
| `packages/ui` | Zdieľané používateľské prvky |
| `data/tenerife` | Konfigurácia a neskôr verejné dáta Tenerife |
| `data/shared` | Pravidlá spoločných dát |
| `docs` | Architektúra a pracovné postupy |

Glóbus používa elipsoid bez externých mapových snímok a terénu. Nepotrebuje Cesium ion účet. 3D scéna obsahuje iba demonštračný objekt. Toto je funkčný vývojový základ, nie hotový turistický portál.

Ďalšie ostrovy vzniknú najprv ako dátové balíky; samostatnú aplikáciu pridáme iba pri samostatnom používateľskom rozhraní alebo nasadení. Nevytvárame prázdne kópie aplikácií.

Pozri [ontológiu a základné pojmy](docs/ONTOLOGY.md), [architektúru](docs/ARCHITECTURE.md), [vývoj](docs/DEVELOPMENT.md) a [históriu zmien](CHANGELOG.md).
