# Calder: sports and luxury car rental landing page

An example landing page built with the `master-design-web` skill (v2) from this prompt:

> build me a landing page for a sports/luxury car renting agency, the products are mostly sports cars and some luxury cars (Ferrari, Lamborghini, McLaren, Aston Martin, Bugatti, Koenigsegg, Rolls Royce, Maserati, Maybach, G Class Mercedes, Mansory packs, Brabus packs), audience is rich/car people. Mood should be quiet luxury and sporty luxurious feeling, quiet and subtle wealth. Build straight away.

The ungraded source photos are kept out of the repo.

Static site, no build step. Open `index.html`, or serve the folder (`python -m http.server`).

- `index.html`, `styles.css`, `main.js`: the page. Fleet data (models, prices, specs, availability) is the `FLEET` array at the top of `main.js`.
- `img/`: graded WebP photos. `img/credits.json` and `credits.js`: attribution, shown under "Photo credits" in the footer.

## Placeholders to replace before launch

- Prices, specs, unit counts and return dates in `FLEET`.
- Phone number (+377 00 00 00 00), email, garage addresses, delivery times, opening hours, driver age rule.
- The form doesn't send anything yet: `main.js` simulates the request. Wire it to the booking backend.
- Photos are Wikimedia Commons car-show and street shots (CC BY / CC BY-SA, attribution required). Replace them with a shoot of the real fleet in the same dark grade.
