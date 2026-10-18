# Repro: measureInWindow after a page sheet is dismissed (iOS, Fabric)

Not run yet, written from the issue. Needs an iPhone (for example iPhone Air, portrait).

1. `npm install`, `npx pod-install`, run on iOS.
2. Tap Measure, note the y value.
3. Tap Open page sheet, then Dismiss.
4. Tap Measure again. Expected: the same y. Reported: y off by the sheet shrink (about 20 or 68 pt).
