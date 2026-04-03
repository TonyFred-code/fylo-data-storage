# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.2] - 2026-04-03

### Changed

- Updated `README.md` content to document project.
- Made the `free-storage` tooltip and its arrow overlap

### Removed

- Removed project README.md template file

### Added

- Added `AGENTS.md` to document AI collaboration specifications
- Added screenshots of final build

---

## [1.0.1] - 2026-04-03

### Fixed

- Corrected `storagePercentageUsed` assignment causing storage bar flicker

### Changed

- Updated large-screen main background position utility (`bg-bottom-right` -> `bg-bottom`)
- Improved readability of argument normalization for `randomInteger` helper function

---

## [1.0.0] - 2026-04-03

### Added

- Created helper function to generate random integer `randomInteger.js`
- Create `Bar` component to display bar usage visually
- Create custom fonts and colors in `index.css` using `@theme` and `@utility`
- Add `googleapis` font family link to `index.html`
