# Questbound Runtime Package V1 — Source Selection

Status: **Complete for non-animation assets**

This file records the exact source inputs selected for the first Questbound 3D vertical slice. These are source inputs only. The repository should ultimately contain optimized GLB runtime derivatives, not the original GLTF/BIN/PNG source set.

## Character bodies

- `QB_CHAR_BODY_TEEN_M`
  - `Teen_Male_FullBody.gltf` — Drive ID `1FakLIqnlMXvNXhXjxfScxDJp8-aYgAyq`
  - `Teen_Male_FullBody.bin` — Drive ID `1dWfXmo-TD1NXd7OhNkes_cYXrlhng4g2`
  - Target runtime: `characters/bodies/qb-teen-male-v1.glb`

- `QB_CHAR_BODY_TEEN_F`
  - `Teen_Female_FullBody.gltf` — Drive ID `1llvBk8JXtG0CD-DGTBfgOstdEPkJgCfe`
  - `Teen_Female_FullBody.bin` — Drive ID `1nredDQ-T9glRgf8VDmBfolqWu--bcVco`
  - Target runtime: `characters/bodies/qb-teen-female-v1.glb`

## Hair proof set

One style per body family is enough to prove modular attachment before expanding the catalog.

- Female: `Hair_Bob_Teen.gltf` + `Hair_Bob_Teen.bin`
  - GLTF Drive ID `1fRSgpeAGW-Gaiu4y_RuDvKFC1exNLmRm`
  - BIN Drive ID `1U4h8aWcOs2En3AtdUxqkGzN8I31IUKzk`
  - Target runtime: `characters/hair/qb-hair-f-bob-v1.glb`

- Male: `Hair_SimpleParted_Teen.gltf` + `Hair_SimpleParted_Teen.bin`
  - GLTF Drive ID `1CVh3miadqU-J6ouy6FCSqcj9YF8pBsTw`
  - BIN Drive ID `108m9aKvhHegxQEccCzZv6-GN7_xb4tpz`
  - Target runtime: `characters/hair/qb-hair-m-simple-parted-v1.glb`

## Gear proof set

Use one body-slot armor item for each body family to prove separate skinned-equipment assembly.

- Male Knight Body Armor
  - `Male_Knight_Body_Armor.gltf` — Drive ID `1-CYbsGBoa-3V9UvSfVkev5W4Tm8vl4gi`
  - `Male_Knight_Body_Armor.bin` — Drive ID `187BDHKovhgWI6dm2maVIBcVtDZ8SttPX`
  - Target runtime: `characters/gear/qb-knight-body-armor-m-v1.glb`

- Female Knight Body Armor
  - `Female_Knight_Body_Armor.gltf` — Drive ID `1utn95ZW4i2RsOj1rkLvueff4mJJLHyA9`
  - `Female_Knight_Body_Armor.bin` — Drive ID `1bLdg59l5YM6-xnHpOmt1AzKyyxWKBGiS`
  - Target runtime: `characters/gear/qb-knight-body-armor-f-v1.glb`

## Guild Hall environment build set

The first room is intentionally limited. Fixed architecture should be merged into one optimized room GLB; interactive objects can remain separate later if needed.

Architecture shortlist from Medieval Village MegaKit:

- `Wall_WoodWear_Window_Wide_Flat.gltf`
- `Window_Wide_Flat1.gltf`
- `Window_Wide_Round1.gltf`
- `WindowShutters_Wide_Flat_Open.gltf`
- `WindowShutters_Wide_Flat_Closed.gltf`
- `Stair_Interior_Rails.gltf`
- `Stair_Interior_Rails_Corner.gltf`
- `Stair_Interior_Solid.gltf`
- `Stair_Interior_SolidCorner.gltf`

Prop shortlist from Fantasy Props MegaKit:

- `WeaponStand.gltf`
- `Workbench.gltf`
- `Shelf_Arch.gltf`
- `Shelf_Small_Bottles.gltf`
- `Rug_1.gltf`
- `Rug_Round.gltf`
- `Scroll_1.gltf`
- `Scroll_2.gltf`
- `Runes.gltf`
- `Sign_Armory.gltf`
- `Sign_Potions.gltf`

Target runtime room bundle:

`environments/guild/qb-guild-hall-v1.glb`

## Animation bundle

Not complete yet because `Universal Animation Library[Source].zip` has not been extracted in Drive.

Reserved target:

`animations/qb-humanoid-core-v1.glb`

Planned clips are recorded in `runtime/manifest.json`.

## Build rule

Do not upload these source files directly to GitHub Pages. Build optimized GLB derivatives first, resize/compress textures, and then publish only the runtime outputs.
