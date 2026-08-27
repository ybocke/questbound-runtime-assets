# Questbound 2D Avatar DEV Starter

This folder contains the first renderer-side 2D representation for the shared Questbound avatar state.

- 1024x1024 full-canvas alignment
- transparent SVG layers
- BODY layer is intentionally school-safe: head/neck/forearms/hands only, never an unclothed torso or legs
- required OUTFIT layer supplies complete clothing
- browser fails closed to the existing safe placeholder until the required outfit layer is loaded

The 2D and 3D representations share the same canonical avatar/equipment IDs; these files are renderer assets, not separate inventory items.
