# QuestBound Quartermaster Proof of Beauty V1 — Runtime Provenance

All files in this vertical-slice folder are DEV candidates. They are not a
PROD promotion and do not alter the authoritative student datastore.

## Selected owned source assets

| QuestBound identity | Source pack/file | Drive file ID | License / credit |
|---|---|---|---|
| Human/Teen Standard head and profile | Universal Base Characters — `Teen_Male_FullBody.gltf` | `1FakLIqnlMXvNXhXjxfScxDJp8-aYgAyq` | CC0 1.0; models by Quaternius |
| Ranger Outfit | Modular Character Outfits - Fantasy — `Male_Ranger.gltf` | `1wdg3TJO9VZ-UKQvHOIV1saDVFk6nASUt` | CC0 1.0; models by Quaternius |
| Fox Familiar | Ultimate Animated Animals — `Fox.gltf` | `1Ij1WWfkfZtfpbqhN_0e3IR-d2knArew_` | CC0 1.0; models by Quaternius |
| Traveler Blade thumbnail identity | Ultimate RPG Items Pack — `Sword.png` | `1gFojt29pH1jZMDbO-YJ9onVb5fxtXujx` | CC0 1.0; models by Quaternius |

The source pack licenses were read from Drive before processing. Source folder
structure and filenames are preserved in this record even though browser assets
use stable QuestBound runtime names.

## QuestBound-created presentation assets

- `environments/qb-quartermaster-chamber-v1.webp`: generated specifically for
  QuestBound as a UI environment plate; contains no character or equipment.
- `ui/qb-apprentice-wizard-hat-v1.webp`: generated supplementary presentation
  identity for existing catalog item `AV_UNIVERSAL_HEADGEAR_WIZARD_001`.
- `ui/qb-guild-cape-v1.webp`: generated supplementary presentation identity for
  existing catalog item `AV_UNIVERSAL_BACK_CAPE_001`.
- `characters/presentation/qb-ranger-hero-v1.webp`: generated 2.5D presentation
  render derived from the selected Quaternius Ranger silhouette and texture
  palette. It represents `AV_UNIVERSAL_OUTFIT_RANGER_001`; it is not a new item.
- `creatures/presentation/qb-fox-familiar-art-v1.webp`: generated 2.5D
  presentation render derived from the selected Quaternius fox identity. It
  represents `AV_UNIVERSAL_FAMILIAR_FOX_001`; it is not a new item.

The two presentation renders are separate transparent layers. That separation
allows the Student UI to show or hide the familiar and to label preview state
without changing ownership or equipped state. `tools/chroma-key.js` performs a
deterministic magenta-key cleanup; generated source PNGs remain outside the
runtime folder.

Before commercial release, retain the generation records and confirm the then-
current platform terms for generated presentation art. These images do not
replace the authoritative equipment IDs or ownership records.

## Build policy

- `qb-ranger-outfit-m-v1.glb`: self-contained GLB; source textures resized to a
  maximum dimension of 512 px; no external buffer/image URIs.
- `qb-fox-familiar-v1.glb`: self-contained GLB preserving authored animations;
  no external buffer/image URIs.
- The lightweight 2.5D presentation is the guaranteed path, including on school
  browsers without WebGL. The Student UI may lazy-load the GLBs only when a
  compatible 3D enhancement is explicitly enabled.
- Any failed 3D load fails closed to the polished 2.5D scene or the existing
  fully clothed avatar preview; it never exposes a raw body mesh.
