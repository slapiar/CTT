# Pravidlá vývoja CTT

- Prečítaj README.md a docs/ARCHITECTURE.md pred zmenou štruktúry.
- Zachovaj npm workspaces, jeden koreňový lockfile a privátne @ctt balíky.
- Neimportuj aplikácie z balíkov ani interné cesty iného balíka.
- Doména tourism musí zostať nezávislá od grafických enginov.
- Dáta ostrovov nesmú byť natvrdo v spoločných moduloch.
- Pred odovzdaním spusti npm run check; uveď neuskutočnené kontroly.
- Pri podstatnej zmene aktualizuj CHANGELOG.md v sekcii Nevydané; odlišuj hotové zmeny, výsledky overenia a plány. Pri vydaní doplň verziu, dátum a commit alebo tag.
- Každý renderer musí uvoľniť event listenery, canvas aj GPU zdroje.
- Verejné repo: žiadne tajomstvá, osobné údaje ani neverejné obchodné podklady.
- Nevytváraj druhý repo alebo nový framework bez konkrétnej potreby a rozhodnutia vlastníka.
