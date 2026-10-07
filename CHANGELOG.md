# História zmien CTT

Zapisujeme podstatné zmeny, opravy a stav overenia. Najnovšie záznamy sú hore; pripravované zmeny patria do sekcie Nevydané. Pri vydaní doplníme verziu, dátum a odkaz na príslušný commit alebo tag. Plány nie sú dokončené funkcie.

## Nevydané

### Pridané
- Tento changelog, odkaz z README a pravidlo jeho priebežnej aktualizácie.
- Plán budúceho overenia WebGPU a vyhodnotenia Babylon LITE; vývojový základ zostáva Babylon.js.

## 0.1.0 — 2026-10-07

Počiatočný vývojový základ: [commit c77d3df](https://github.com/slapiar/CTT/commit/c77d3df). Nejde o produkčné vydanie.

### Pridané
- Monorepozitár pre Kanárske ostrovy s pilotnou aplikáciou Tenerife.
- npm workspaces, spoločný lockfile a TypeScript.
- Spoločné balíky pre turistickú doménu, UI, Cesium a Babylon.js; oddelené dáta Tenerife.
- Samostatne načítavané geografické a lokálne 3D zobrazenie s uvoľňovaním zdrojov pri prepínaní.
- Glóbus bez externého terénu, mapových snímok alebo povinného Cesium ion účtu.
- Dátové testy, automatické kontroly a dokumentácia architektúry a vývoja.

### Overenie a obmedzenia
- Pri vytvorení základu prešli TypeScript, tri dátové testy a produkčný build; preview server sa spustil.
- Vizuálne overenie WebGL, prepínania scén a zmeny veľkosti okna zostáva otvorené.
- Build upozorňuje na veľkosť balíkov grafických enginov.

## Návrat k predchádzajúcemu stavu

Changelog je prehľad; úplnú históriu uchováva Git. Na prezretie počiatočného základu bez zmeny pracovnej vetvy možno použiť `git worktree add --detach ../CTT-0.1.0 c77d3df`. Závislosti v tejto kópii nainštaluj cez `npm ci`.

Opravu už zdieľanej histórie robíme cez `git revert <commit>` v pracovnej vetve a následnú kontrolu/PR. Pri viacerých závislých zmenách najprv určíme rozsah návratu. Neprepisujeme spoločnú históriu núteným pushom.
