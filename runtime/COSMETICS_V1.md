# QuestBound 2D Cosmetics V1 — DEV Candidate

This slice adds visible renderer assets for the five purchasable cosmetics currently present in `Avatar Asset Catalog`:

- Ranger Outfit
- Apprentice Wizard Hat
- Guild Cape
- Fox Familiar
- Traveler Blade

All layers use the existing 1024×1024 `FULL_CANVAS` alignment. They target the existing `HUMAN|STANDARD` 2D vertical slice and share the canonical catalog asset IDs.

## Safety

- The Ranger Outfit is a complete required clothing layer. It covers torso, arms, legs, and feet before the renderer may display the shared safe body layer.
- Unsupported families and rigs must continue to use the current safe prototype fallback.
- No datastore, purchase, equip, or progression behavior is changed by these files.
- These files must be tested from a non-default branch in Student DEV before any merge to the GitHub Pages branch.

## Provenance

- Ranger Outfit: vector derivative informed by the CC0 Quaternius `Modular Character Outfits - Fantasy` Ranger models and preview.
- Fox Familiar: vector derivative informed by the CC0 Quaternius `Ultimate Animated Animals` Fox model and preview.
- Traveler Blade: vector derivative informed by the CC0 Quaternius `Ultimate RPG Items` `Sword.png` render.
- Apprentice Wizard Hat and Guild Cape: original QuestBound vectors because no exact matching library asset was found.

See `characters/2d/cosmetics-manifest.v1.json` for the machine-readable mapping.
