# Questbound Runtime Package V1 Build

Status: runtime binaries built and validated; binary upload to GitHub is the remaining transfer step.

## Build baseline

- Runtime container: GLB 2.0
- Geometry: original verified source geometry preserved
- Textures: embedded PNG
- Maximum runtime texture dimension: 512 px
- External image dependencies: none
- Draco/Meshopt: not applied in this first baseline
- KTX2/Basis: not applied in this first baseline
- Animations: waiting for the Universal Animation Library source ZIP to be extracted

## Built files

- `characters/bodies/qb-teen-male-v1.glb` — 1,966,536 bytes — SHA256 `227c0b042f1ff26fef4e6f9f82b59a14f23103bac7915b0d7f9618258bbec360`
- `characters/bodies/qb-teen-female-v1.glb` — 2,058,788 bytes — SHA256 `2e437225a857d4db0a483f20ffd2bc817b5f36980ca327ed2c7d92107179f97a`
- `characters/hair/qb-hair-f-bob-v1.glb` — 950,248 bytes — SHA256 `9941b0109fa2d0b36ca1b300e1468ab5715df115883fd9cc89b1244a63c6abd5`
- `characters/hair/qb-hair-m-simple-parted-v1.glb` — 674,164 bytes — SHA256 `d6b8877dd90321665b239ab21640db67f398aeed396af92b3377c7a0f9858718`
- `characters/gear/qb-knight-body-armor-m-v1.glb` — 1,554,188 bytes — SHA256 `d3483c138e6700cc4d62189bdcc1370d36c2384a0cd637bc221bb01032d02c40`
- `characters/gear/qb-knight-body-armor-f-v1.glb` — 1,401,704 bytes — SHA256 `e6b977003ff56258ca25d3a096a7003489bff79dd34f5e9469fadf5f3ba440ca`
- `environments/guild/qb-guild-wall-window-wide-v1.glb` — 1,354,480 bytes — SHA256 `a9ab41e8cbff906ce64d3cb6e288338063bf86919e9bfc203c635bec1cc049d6`
- `environments/guild/qb-guild-window-wide-v1.glb` — 668,888 bytes — SHA256 `76a47f43b127054497d4e90f19a94736d141713769799c80ebe43fe460dfd5bb`

## Why this is a baseline rather than final compression

The immediate goal is to prove direct static delivery, Babylon loading, modular avatar assembly, and classroom-device behavior using small self-contained files. Once that works, the same assets can be profiled against KTX2 + Meshopt/Draco variants before Questbound commits to the permanent production build settings.
