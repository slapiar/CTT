# Architektúra CTT

## Rozhodnutie 001 — jeden monorepozitár

CTT pokrýva Kanárske ostrovy; TTT sa zatiaľ nezakladá. npm workspaces prepájajú privátne interné balíky `@ctt/*`. Verzia 0.1.0 je spoločná počiatočná verzia, nie prísľub verejného npm API. Balíky exportujú TypeScript zdroj pre Vite; pred samostatným publikovaním by potrebovali vlastný build.

## Hranice

Aplikácie importujú verejné exporty balíkov. `tourism` nepozná DOM, Babylon ani Cesium. Dáta závisia iba od domény. Grafické balíky neimportujú dáta konkrétneho ostrova ani aplikácie. UI nepozná grafické enginy. Medzi aplikáciami nie sú importy.

Cesium a Babylon majú samostatný canvas a životný cyklus. Načítavajú sa až po výbere zobrazenia, predchádzajúce zobrazenie sa uvoľní. Nejde o prekrytie dvoch enginov v jednej scéne. Prípadná budúca synchronizácia kamier bude samostatné integračné rozhodnutie.

Geografická poloha je WGS84: pomenované longitude/latitude v stupňoch, altitude v metroch. Lokálne Babylon súradnice sa nesmú ukladať ako geografické. Transformáciu definujeme pri prvom reálnom georeferencovanom modeli.

## Rozšírenie

1. Pridaj `data/<ostrov>` s jedinečným npm názvom a exportom validovanej konfigurácie.
2. Použi spoločnú aplikáciu, pokiaľ sa menia iba dáta.
3. Nový `apps/<ostrov>` vytvor až pre odlišnú aplikáciu alebo nasadenie; zdieľaj balíky.
4. Zmenu technologických hraníc zapíš ako nové rozhodnutie v docs.

## Dáta a služby

Do verejného repozitára patria iba údaje určené na zverejnenie. Pri každom externom datasete eviduj pôvod, licenciu, čas aktualizácie a atribúciu. Veľké modely, rastry a videá patria do objektového úložiska; Git uchová manifesty a URL. Súkromné kontakty, zmluvy a osobné údaje sem nepatria.

Cesium ion a ďalšie služby sú voliteľné; základ funguje bez účtu. Verejný frontend nikdy neschová tajomstvo v premennej VITE_*. Mapové snímky a terén pridáme až s vybraným zdrojom a jeho podmienkami.

Verejná dostupnosť repozitára sama neudeľuje open-source licenciu. Výber licencie zostáva rozhodnutím vlastníka.
